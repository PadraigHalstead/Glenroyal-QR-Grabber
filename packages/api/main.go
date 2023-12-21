package main

import (
	"fmt"
	"os"
	"regexp"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "POST"},
		AllowHeaders: []string{"Origin"},
	}))

	os.Setenv("QR_CODE", "")

	router.GET("/api/qr", func(c *gin.Context) {
		qrCode := os.Getenv("QR_CODE")
		timestamp := os.Getenv("TIMESTAMP")

		if isValidQRCode(qrCode) && isTimestampToday(timestamp) {
			qr := gin.H{"code": qrCode}
			c.JSON(200, qr)
		} else {
			c.JSON(400, gin.H{"error": "Invalid QR code. Please obtain a new one."})
		}
	})

	router.POST("/api/qr", func(c *gin.Context) {
		var jsonInput struct {
			QR string `json:"qr"`
		}

		if err := c.BindJSON(&jsonInput); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		newQR := jsonInput.QR
		fmt.Printf("QR Code: %s\n", newQR)

		if isValidQRCode(newQR) {
			currentTime := time.Now().Format(time.RFC3339)

			os.Setenv("QR_CODE", newQR)
			os.Setenv("TIMESTAMP", currentTime)

			updatedQR := gin.H{
				"code": newQR,
			}

			c.JSON(200, updatedQR)
		} else {
			c.JSON(400, gin.H{"error": "Invalid QR code."})
		}
	})

	router.Run(":8080")
}

func isValidQRCode(qrCode string) bool {
	regex := regexp.MustCompile("^[a-zA-Z0-9]{15}$")

	// Check if the QR code matches the pattern
	isValid := regex.MatchString(qrCode)

	// Log the result
	fmt.Printf("QR Code: %s, IsValid: %v\n", qrCode, isValid)

	return isValid
}

func isTimestampToday(timestamp string) bool {
	timestampTime, err := time.Parse(time.RFC3339, timestamp)
	if err != nil {
		return false
	}
	currentDate := time.Now().Format("2006-01-02")
	timestampDate := timestampTime.Format("2006-01-02")

	return currentDate == timestampDate
}
