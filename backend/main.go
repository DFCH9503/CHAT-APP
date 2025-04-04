package main

import (
    "fmt"
    "net/http"

    websocket"package/websocket"
)


// define our WebSocket endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
    fmt.Println(r.Host)

  // upgrade this connection to a WebSocket
  // connection
    ws, err := websocket.Upgrade(w, r)
    if err != nil {
        fmt.Fprintf(w, "%+v\n", err)
	}
  // listen indefinitely for new messages coming
  // through on our WebSocket connection
    go websocket.Writer(ws)
    websocket.Reader(ws)
}

func setupRoutes() {
  // mape our `/ws` endpoint to the `serveWs` function
    http.HandleFunc("/ws", serveWs)
}

func main() {
    fmt.Println("Chat App v0.02")
    fmt.Println("Check server http://localhost:8080/")
    setupRoutes()
    http.ListenAndServe(":8080", nil)
}