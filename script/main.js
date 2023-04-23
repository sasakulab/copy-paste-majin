const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("t") == true){
  const text = getParam()
  document.getElementById("copypastetext").value = text
  console.log("Got URL Param")
}

function getParam() {
  const t = urlParams.get("t")
  return t
}

function tweetText() {
  window.location.href = `https://twitter.com/intent/tweet?text=${getParam()}`
}

function getText() {
  var t = document.getElementById("copypastetext").value
  console.log(`getText(): ${t}`)
  return t
}

function generateLink() {
  t = getText()
  document.getElementById("url").value = "https://c.sasakulab.com/r.html?t=" + t
  document.getElementById("anchor").value = `<a href="https://c.sasakulab.com/r.html?t=${t}">Copy</a>`
}

function copyText(id) {
  var t = document.getElementById(id).value
  navigator.clipboard.writeText(t).then(
    () => {
      console.log("Success")
      document.getElementById("clip-success").style = "display: block;"
      setTimeout(() => {
        document.getElementById("clip-success").style = "display: none;"
      }, 3000)
    },
    () => {
      console.log("Failed")
      document.getElementById("clip-error").style = "display: block;"
      setTimeout(() => {
        document.getElementById("clip-error").style = "display: none;"
      }, 3000)
    }
  )
}
