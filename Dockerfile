FROM golang:1.18.6-alpine3.16 as builder 
WORKDIR /go/src 
COPY . . 
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /fullcycle

FROM gcr.io/distroless/base-debian10
WORKDIR /
COPY --from=builder /fullcycle /fullcycle
CMD ["./fullcycle"]