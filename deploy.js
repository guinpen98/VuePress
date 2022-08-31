var ghpages = require("gh-pages");

ghpages.publish("./src/.vuepress/dist", {
    user: {
        name: "guinpen98",
        email: "guinpen9988@gmail.com"
    },
    message: "Auto build and deploy [ci skip]"
}
);