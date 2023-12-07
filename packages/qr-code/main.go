package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "POST"},
		AllowHeaders: []string{"Origin"},
	}))

	filePath := "./fs/qr-code.txt"

	createFileIfNotExists(filePath)

	router.GET("/api/qr", func(c *gin.Context) {
		fileInfo, err := os.Stat(filePath)
		if err != nil {
			c.JSON(500, gin.H{"error": "Error getting file info"})
			return
		}

		// Check if the QR is from today - QR changes daily
		modifiedTime := fileInfo.ModTime().Format("2006-01-02")
		today := time.Now().Format("2006-01-02")

		if modifiedTime != today {
			c.JSON(400, gin.H{"error": "Invalid QR"})
			return
		}

		// Read the content of the file
		content, err := ioutil.ReadFile(filePath)
		if err != nil {
			c.JSON(500, gin.H{"error": "Error reading file"})
			return
		}

		qrCode := strings.TrimSpace(string(content))

		if isValidQRCode(qrCode) {
			qr := gin.H{"code": qrCode}
			c.JSON(200, qr)
		} else {
			c.JSON(400, gin.H{"error": "Invalid or empty QR code"})
		}
	})

	router.POST("/api/qr", func(c *gin.Context) {
		newQR := c.PostForm("qr")

		createFileIfNotExists(filePath)

		if isValidQRCode(newQR) {
			err := ioutil.WriteFile(filePath, []byte(newQR), 0644)
			if err != nil {
				c.JSON(500, gin.H{"error": "Error updating file"})
				return
			}

			updatedQR := gin.H{"code": newQR}
			c.JSON(200, updatedQR)
		} else {
			c.JSON(400, gin.H{"error": "Invalid QR code"})
		}
	})

	router.Run(":8080")
}

func createFileIfNotExists(filePath string) {
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		// Create the file if it doesn't exist
		file, err := os.Create(filePath)
		if err != nil {
			fmt.Println("Error creating file:", err)
			return
		}
		defer file.Close()
	}
}

func isValidQRCode(qrCode string) bool {
	return qrCode != "" && len(qrCode) <= 15
}
