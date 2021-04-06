if (location.href.split('://')[0] == "http") {
  location.replace("https://"+location.href.split('/')[2])
}
