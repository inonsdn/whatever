package httpcon

import (
	"fmt"
	"net/http"
)

type HttpConnection struct {
	reader  *http.Request
	writer  http.ResponseWriter
	channel chan int
	path    []PathHandler
}

func InitPath(h *HttpConnection, pathHandler PathHandler) {
	http.HandleFunc("/", pathHandler.Execute)
	h.path = append(h.path, pathHandler)
}

func (h *HttpConnection) Run() error {
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("Got error while running, stop")
	}
	return err
}

func (h *HttpConnection) RunForever() {
	err := h.Run()
	if err != nil {
		fmt.Println("Got error while running, stop")
		h.channel <- -1
	} else {
		h.channel <- 0
	}
}

func (h *HttpConnection) WaitStatus() int {
	return <-h.channel
}
