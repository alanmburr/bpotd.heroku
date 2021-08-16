if (location.href.split('://')[0] == "http" && location.href.search("localhost") == -1) {
  location.replace("https://"+location.href.split('/')[2])
}
