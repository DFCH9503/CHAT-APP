module github.com/TutorialEdge/realtime-chat-go-react

go 1.23.6

replace package/websocket => ./pkg/websocket/

require package/websocket v0.0.0-00010101000000-000000000000

require github.com/gorilla/websocket v1.5.3 // indirect
