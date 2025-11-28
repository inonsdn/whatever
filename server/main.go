package main

import (
	"fmt"

	"github.com/inonsdn/whatever/httpcon"
)

func main() {
	// initRegisterHandler()
	fmt.Println("Run server")

	httpConnection := httpcon.HttpConnection{}

	httpcon.InitPath(
		&httpConnection,
		&httpcon.Path{
			Name: "/",
		},
	)

	httpcon.InitPath(
		&httpConnection,
		&httpcon.Path{
			Name: "/test",
		},
	)

	// run server in other
	go httpConnection.RunForever()

	fmt.Printf("Running and waiting")

	// waiting status
	status := httpConnection.WaitStatus()

	fmt.Printf("Running got status: %d\n", status)
}
