// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#processing_a_text_file_line_by_line
async function readHTML(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let { value: chunk }= await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
    return(chunk)
}

const getPossibleBlog = () => {
    _url = window.location.href.split('/')
    if (_url[3] === '_blog' && _url.length === 6) {	// should be _url[3]
        // console.log(_url[5])	                    // should be _url[4]
        readHTML(`./blog/${_url[5]}`).then(res => document.body.innerHTML = res)
    } else {
        document.body.innerHTML = '<h1><em>404</em></h1>'
    }
}

// only for testing
window.addEventListener('hashchange', function () {
    getPossibleBlog()
});

getPossibleBlog()
