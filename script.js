function index() {
    let content_show = document.getElementById("content_show");
    content_show.style.display = "block";
    let content_div = document.getElementById("content_div");
    content_div.style.display = "none";
    var input = JSON.stringify({url: document.getElementById("url_input").value});
    $.ajax({
        url: 'https://webp.itprof.sk/fetchurl/',
        type: 'POST',
        data: input,
        contentType: 'application/json; charset=utf-8',
        dataType: "text",
        success: function (data) {
            data_feeds = data;
            remove();
            write()
        }
    });
}

function remove() {
    let list_feed = document.getElementById("list_feed");
    list_feed.remove();
    list_feed = document.createElement("div");
    list_feed.id = "list_feed";
    const order_div = document.getElementById("order_div");
    order_div.appendChild(list_feed);
}

function write() {
    let i = 1;
    $(data_feeds).find("item").each(function () {
        let list = $(this);
        if (i === 1) {
            show(list.find("pubDate").text())
        }
        const para = document.createElement("P");
        para.innerText = i + ". ";
        const ar = document.createElement("A");
        ar.innerText = list.find("title").text() + "\nPosted: " + list.find("pubDate").text();
        ar.href = "javascript:show(\"" + list.find("pubDate").text() + "\");";
        para.appendChild(ar);
        let list_feed = document.getElementById("list_feed");
        list_feed.appendChild(para);
        i++;
    })
}

function sort() {
    let date_list = [];
    $(data_feeds).find("item").each(function () {
        let feed = $(this);
        date_list.push(feed.find("pubDate").text());
    });

    date_list.sort(function (a, b) {
        if (document.getElementById("list_input").value === "ASC") {
            return Date.parse(a) - Date.parse(b)
        } else {
            return Date.parse(b) - Date.parse(a)
        }
    });
    remove();
    let j;
    let i = 1;
    for (j = 0; j < date_list.length; j++) {
        $(data_feeds).find("item").each(function () {
            let list = $(this);
            if (date_list[j] === list.find("pubDate").text()) {
                if (i === 1) {
                    show(list.find("pubDate").text())
                }
                const para = document.createElement("P");
                para.innerText = i + ". ";
                const ar = document.createElement("A");
                ar.innerText = list.find("title").text() + "\nPosted: " + list.find("pubDate").text();
                ar.href = "javascript:show(\"" + list.find("pubDate").text() + "\");";
                para.appendChild(ar);
                let list_feed = document.getElementById("list_feed");
                list_feed.appendChild(para);
                i++;
            }
        })
    }
}

function show(date) {
    let content_show = document.getElementById("content_show");
    content_show.style.display = "none";
    let content_div = document.getElementById("content_div");
    content_div.style.display = "block";
    let i = 1;
    $(data_feeds).find("item").each(function () {
        let feed = $(this);
        if (feed.find("pubDate").text() === date) {
            let img = document.getElementById("content_div_img");
            if (feed.find("enclosure").length !== 0) {
                img.src = feed.find("enclosure")[0].getAttribute("url");
                img.alt = feed.find("title").text();
            } else {
                img.src = "imgnotfound.jpg";
                img.alt = "image not found";
            }
            document.getElementById("content_div_h1").innerText = feed.find("title").text();
            document.getElementById("content_div_date").innerText = "Publication date: " + feed.find("pubDate").text();
            document.getElementById("content_div_desc").innerText = "Description: " + feed.find("description").text();
            document.getElementById("content_div_link").href = feed[0].getElementsByTagName("link")[0].nextSibling.textContent;
            document.getElementById("content_div_link").target = "_blank";
        }
        i++;
    });
}
