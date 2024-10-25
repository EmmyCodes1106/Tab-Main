const buttons = document.querySelectorAll("button");

buttons.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.stopPropagation();
        const clickedTabValue = event.currentTarget.dataset.content
        const htmlActiveTab = document.querySelector("[data-active-btn]");

        // remove prev tab
        const prevTabContents = document.querySelectorAll(
            `[data-active-btn='${htmlActiveTab.dataset.activeBtn}']`
        );
        prevTabContents.forEach(function (item) {
            console.log({ item });
            item.removeAttribute("data-active-btn");
        });

        // set new tab
        const tabContent = document.querySelectorAll(
            `[data-content='${clickedTabValue}']`
        );
        tabContent.forEach(function (item) {
            item.setAttribute("data-active-btn", clickedTabValue);
        });
    });
});
