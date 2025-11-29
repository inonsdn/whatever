package main

import (
	"github.com/inonsdn/whatever/httpcon"
)

func main() {
	con, err := httpcon.InitHandler()
	if err != nil {
		return
	}
	go con.Run()

	con.WaitAndGetStatus()
}
