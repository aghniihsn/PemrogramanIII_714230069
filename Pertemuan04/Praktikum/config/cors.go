package config

var allowedOrigins = []string{
	"https://localhost:3000",
	"https://indrariksa.github.io",
}

func GetAllowedOrigin() []string {
	return allowedOrigins
}
