FROM golang:1.18.6-alpine3.16 as builder 
WORKDIR /go/src 
COPY . . 
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /fullcycle

FROM scratch
COPY --from=builder . .
CMD ["./fullcycle"]