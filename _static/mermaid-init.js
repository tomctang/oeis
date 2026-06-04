document.addEventListener("DOMContentLoaded", function() {

    if (typeof mermaid !== "undefined") {

        mermaid.initialize({
            startOnLoad: true
        });

        document.querySelectorAll(".highlight-mermaid pre")
            .forEach(function(pre) {

                const div = document.createElement("div");
                div.className = "mermaid";
                div.textContent = pre.textContent;

                pre.parentNode.replaceWith(div);
            });

        mermaid.run();
    }
});