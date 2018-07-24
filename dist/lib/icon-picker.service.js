"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_1 = require("./icon");
var IconPickerService = (function () {
    function IconPickerService() {
    }
    IconPickerService.prototype.getIcons = function (ipIconPack) {
        var icons = [];
        if (ipIconPack === 'fa' || ipIconPack === 'all') {
            var faIcons = this.getFaIcons().map(function (icon) {
                icon.type = icon_1.IconType.FONT_AWESEOME;
                return icon;
            });
            icons = icons.concat(faIcons);
        }
        if (ipIconPack === 'bs' || ipIconPack === 'all') {
            var bsIcons = this.getBsIcons().map(function (icon) {
                icon.type = icon_1.IconType.BOOTSTRAP;
                return icon;
            });
            icons = icons.concat(bsIcons);
        }
        return icons;
    };
    IconPickerService.prototype.getFaIcons = function () {
        return [
            {
                "name": "YouTube Square",
                "id": "youtube-square",
                "filter": [
                    "youtube-square"
                ]
            },
            {
                "name": "YouTube",
                "id": "youtube",
                "filter": [
                    "audio-video",
                    "film",
                    "video",
                    "youtube-play",
                    "youtube-square",
                    "youtube"
                ]
            },
            {
                "name": "Yoast",
                "id": "yoast",
                "filter": [
                    "yoast"
                ]
            },
            {
                "name": "Yen Sign",
                "id": "yen-sign",
                "filter": [
                    "currency",
                    "jpy",
                    "jpy",
                    "yen-sign"
                ]
            },
            {
                "name": "Yelp",
                "id": "yelp",
                "filter": [
                    "yelp"
                ]
            },
            {
                "name": "Yandex International",
                "id": "yandex-international",
                "filter": [
                    "yandex-international"
                ]
            },
            {
                "name": "Yandex",
                "id": "yandex",
                "filter": [
                    "yandex"
                ]
            },
            {
                "name": "Yahoo Logo",
                "id": "yahoo",
                "filter": [
                    "yahoo"
                ]
            },
            {
                "name": "Y Combinator",
                "id": "y-combinator",
                "filter": [
                    "y-combinator"
                ]
            },
            {
                "name": "Xing Square",
                "id": "xing-square",
                "filter": [
                    "xing-square"
                ]
            },
            {
                "name": "Xing",
                "id": "xing",
                "filter": [
                    "xing"
                ]
            },
            {
                "name": "Xbox",
                "id": "xbox",
                "filter": [
                    "xbox"
                ]
            },
            {
                "name": "X-Ray",
                "id": "x-ray",
                "filter": [
                    "medical",
                    "radiological images",
                    "radiology",
                    "x-ray"
                ]
            },
            {
                "name": "Wrench",
                "id": "wrench",
                "filter": [
                    "interfaces",
                    "editors",
                    "objects",
                    "maps",
                    "fix",
                    "settings",
                    "spanner",
                    "tool",
                    "update",
                    "wrench"
                ]
            },
            {
                "name": "WPForms",
                "id": "wpforms",
                "filter": [
                    "wpforms"
                ]
            },
            {
                "name": "WPExplorer",
                "id": "wpexplorer",
                "filter": [
                    "wpexplorer"
                ]
            },
            {
                "name": "WPBeginner",
                "id": "wpbeginner",
                "filter": [
                    "wpbeginner"
                ]
            },
            {
                "name": "Wordpress Simple",
                "id": "wordpress-simple",
                "filter": [
                    "wordpress-simple"
                ]
            },
            {
                "name": "WordPress Logo",
                "id": "wordpress",
                "filter": [
                    "wordpress"
                ]
            },
            {
                "name": "Won Sign",
                "id": "won-sign",
                "filter": [
                    "currency",
                    "krw",
                    "krw",
                    "won-sign"
                ]
            },
            {
                "name": "Wolf Pack-battalion",
                "id": "wolf-pack-battalion",
                "filter": [
                    "wolf-pack-battalion"
                ]
            },
            {
                "name": "Wix",
                "id": "wix",
                "filter": [
                    "wix"
                ]
            },
            {
                "name": "Wine Glass-alt",
                "id": "wine-glass-alt",
                "filter": [
                    "travel",
                    "wine-glass-alt"
                ]
            },
            {
                "name": "Wine Glass",
                "id": "wine-glass",
                "filter": [
                    "travel",
                    "moving",
                    "objects",
                    "maps",
                    "wine-glass"
                ]
            },
            {
                "name": "Windows",
                "id": "windows",
                "filter": [
                    "microsoft",
                    "windows"
                ]
            },
            {
                "name": "Window Restore",
                "id": "window-restore",
                "filter": [
                    "code",
                    "window-restore"
                ]
            },
            {
                "name": "Window Minimize",
                "id": "window-minimize",
                "filter": [
                    "code",
                    "window-minimize"
                ]
            },
            {
                "name": "Window Maximize",
                "id": "window-maximize",
                "filter": [
                    "code",
                    "window-maximize"
                ]
            },
            {
                "name": "Window Close",
                "id": "window-close",
                "filter": [
                    "code",
                    "window-close"
                ]
            },
            {
                "name": "Wikipedia W",
                "id": "wikipedia-w",
                "filter": [
                    "wikipedia-w"
                ]
            },
            {
                "name": "WiFi",
                "id": "wifi",
                "filter": [
                    "interfaces",
                    "communication",
                    "maps",
                    "wifi"
                ]
            },
            {
                "name": "WHMCS",
                "id": "whmcs",
                "filter": [
                    "whmcs"
                ]
            },
            {
                "name": "Wheelchair",
                "id": "wheelchair",
                "filter": [
                    "users-people",
                    "vehicles",
                    "health",
                    "accessibility",
                    "objects",
                    "maps",
                    "handicap",
                    "person",
                    "wheelchair"
                ]
            },
            {
                "name": "What's App Square",
                "id": "whatsapp-square",
                "filter": [
                    "whatsapp-square"
                ]
            },
            {
                "name": "What's App",
                "id": "whatsapp",
                "filter": [
                    "whatsapp"
                ]
            },
            {
                "name": "Weixin (WeChat)",
                "id": "weixin",
                "filter": [
                    "weixin"
                ]
            },
            {
                "name": "Hanging Weight",
                "id": "weight-hanging",
                "filter": [
                    "anvil",
                    "heavy",
                    "measurement",
                    "weight-hanging"
                ]
            },
            {
                "name": "Weight",
                "id": "weight",
                "filter": [
                    "medical",
                    "objects",
                    "measurement",
                    "scale",
                    "weight",
                    "weight"
                ]
            },
            {
                "name": "Weibo",
                "id": "weibo",
                "filter": [
                    "weibo"
                ]
            },
            {
                "name": "Weebly",
                "id": "weebly",
                "filter": [
                    "weebly"
                ]
            },
            {
                "name": "Warehouse",
                "id": "warehouse",
                "filter": [
                    "logistics",
                    "warehouse"
                ]
            },
            {
                "name": "Wallet",
                "id": "wallet",
                "filter": [
                    "business",
                    "objects",
                    "wallet"
                ]
            },
            {
                "name": "Walking",
                "id": "walking",
                "filter": [
                    "walking"
                ]
            },
            {
                "name": "Vue.js",
                "id": "vuejs",
                "filter": [
                    "vuejs"
                ]
            },
            {
                "name": "volume-up",
                "id": "volume-up",
                "filter": [
                    "audio-video",
                    "audio",
                    "higher",
                    "louder",
                    "music",
                    "sound",
                    "speaker",
                    "volume-up"
                ]
            },
            {
                "name": "volume-off",
                "id": "volume-off",
                "filter": [
                    "audio-video",
                    "audio",
                    "music",
                    "mute",
                    "sound",
                    "volume-off"
                ]
            },
            {
                "name": "volume-down",
                "id": "volume-down",
                "filter": [
                    "audio-video",
                    "audio",
                    "lower",
                    "music",
                    "quieter",
                    "sound",
                    "speaker",
                    "volume-down"
                ]
            },
            {
                "name": "Volleyball Ball",
                "id": "volleyball-ball",
                "filter": [
                    "sports",
                    "volleyball-ball"
                ]
            },
            {
                "name": "VNV",
                "id": "vnv",
                "filter": [
                    "vnv"
                ]
            },
            {
                "name": "VK",
                "id": "vk",
                "filter": [
                    "vk"
                ]
            },
            {
                "name": "Vine",
                "id": "vine",
                "filter": [
                    "vine"
                ]
            },
            {
                "name": "Vimeo",
                "id": "vimeo-v",
                "filter": [
                    "vimeo",
                    "vimeo-v"
                ]
            },
            {
                "name": "Vimeo Square",
                "id": "vimeo-square",
                "filter": [
                    "vimeo-square"
                ]
            },
            {
                "name": "Vimeo",
                "id": "vimeo",
                "filter": [
                    "vimeo"
                ]
            },
            {
                "name": "Video Slash",
                "id": "video-slash",
                "filter": [
                    "chat",
                    "video-slash"
                ]
            },
            {
                "name": "Video",
                "id": "video",
                "filter": [
                    "chat",
                    "audio-video",
                    "camera",
                    "film",
                    "movie",
                    "record",
                    "video-camera",
                    "video"
                ]
            },
            {
                "name": "Viber",
                "id": "viber",
                "filter": [
                    "viber"
                ]
            },
            {
                "name": "Vials",
                "id": "vials",
                "filter": [
                    "medical",
                    "lab results",
                    "test tubes",
                    "vials"
                ]
            },
            {
                "name": "Vial",
                "id": "vial",
                "filter": [
                    "medical",
                    "test tube",
                    "vial"
                ]
            },
            {
                "name": "Viadeo Square",
                "id": "viadeo-square",
                "filter": [
                    "viadeo-square"
                ]
            },
            {
                "name": "Viadeo",
                "id": "viadeo",
                "filter": [
                    "viadeo"
                ]
            },
            {
                "name": "Viacoin",
                "id": "viacoin",
                "filter": [
                    "viacoin"
                ]
            },
            {
                "name": "Venus Mars",
                "id": "venus-mars",
                "filter": [
                    "gender",
                    "venus-mars"
                ]
            },
            {
                "name": "Venus Double",
                "id": "venus-double",
                "filter": [
                    "gender",
                    "venus-double"
                ]
            },
            {
                "name": "Venus",
                "id": "venus",
                "filter": [
                    "gender",
                    "female",
                    "venus"
                ]
            },
            {
                "name": "Vector Square",
                "id": "vector-square",
                "filter": [
                    "design",
                    "anchors",
                    "lines",
                    "object",
                    "vector-square"
                ]
            },
            {
                "name": "Vaadin",
                "id": "vaadin",
                "filter": [
                    "vaadin"
                ]
            },
            {
                "name": "Utensils",
                "id": "utensils",
                "filter": [
                    "objects",
                    "maps",
                    "cutlery",
                    "dinner",
                    "eat",
                    "food",
                    "knife",
                    "restaurant",
                    "spoon",
                    "utensils"
                ]
            },
            {
                "name": "Utensil Spoon",
                "id": "utensil-spoon",
                "filter": [
                    "objects",
                    "maps",
                    "spoon",
                    "utensil-spoon"
                ]
            },
            {
                "name": "us-Sunnah Foundation",
                "id": "ussunnah",
                "filter": [
                    "ussunnah"
                ]
            },
            {
                "name": "Users Cog",
                "id": "users-cog",
                "filter": [
                    "users-cog"
                ]
            },
            {
                "name": "Users",
                "id": "users",
                "filter": [
                    "users-people",
                    "people",
                    "persons",
                    "profiles",
                    "users"
                ]
            },
            {
                "name": "Remove User",
                "id": "user-times",
                "filter": [
                    "users-people",
                    "user-times"
                ]
            },
            {
                "name": "User Tie",
                "id": "user-tie",
                "filter": [
                    "users-people",
                    "avatar",
                    "business",
                    "clothing",
                    "formal",
                    "user-tie"
                ]
            },
            {
                "name": "User Tag",
                "id": "user-tag",
                "filter": [
                    "users-people",
                    "user-tag"
                ]
            },
            {
                "name": "User Slash",
                "id": "user-slash",
                "filter": [
                    "users-people",
                    "user-slash"
                ]
            },
            {
                "name": "User Shield",
                "id": "user-shield",
                "filter": [
                    "users-people",
                    "user-shield"
                ]
            },
            {
                "name": "User Secret",
                "id": "user-secret",
                "filter": [
                    "users-people",
                    "code",
                    "clothing",
                    "coat",
                    "hat",
                    "incognito",
                    "privacy",
                    "spy",
                    "whisper",
                    "user-secret"
                ]
            },
            {
                "name": "Add User",
                "id": "user-plus",
                "filter": [
                    "users-people",
                    "sign up",
                    "signup",
                    "user-plus"
                ]
            },
            {
                "name": "User Ninja",
                "id": "user-ninja",
                "filter": [
                    "users-people",
                    "assassin",
                    "avatar",
                    "dangerous",
                    "sneaky",
                    "user-ninja"
                ]
            },
            {
                "name": "User Minus",
                "id": "user-minus",
                "filter": [
                    "users-people",
                    "user-minus"
                ]
            },
            {
                "name": "user-md",
                "id": "user-md",
                "filter": [
                    "users-people",
                    "medical",
                    "health",
                    "doctor",
                    "job",
                    "medical",
                    "nurse",
                    "occupation",
                    "profile",
                    "user-md"
                ]
            },
            {
                "name": "User Lock",
                "id": "user-lock",
                "filter": [
                    "users-people",
                    "user-lock"
                ]
            },
            {
                "name": "User Graduate",
                "id": "user-graduate",
                "filter": [
                    "users-people",
                    "cap",
                    "clothing",
                    "commencement",
                    "gown",
                    "graduation",
                    "student",
                    "user-graduate"
                ]
            },
            {
                "name": "User Friends",
                "id": "user-friends",
                "filter": [
                    "users-people",
                    "user-friends"
                ]
            },
            {
                "name": "User Edit",
                "id": "user-edit",
                "filter": [
                    "users-people",
                    "user-edit"
                ]
            },
            {
                "name": "User Cog",
                "id": "user-cog",
                "filter": [
                    "users-people",
                    "user-cog"
                ]
            },
            {
                "name": "User Clock",
                "id": "user-clock",
                "filter": [
                    "users-people",
                    "user-clock"
                ]
            },
            {
                "name": "User Circle",
                "id": "user-circle",
                "filter": [
                    "users-people",
                    "interfaces",
                    "account",
                    "avatar",
                    "head",
                    "man",
                    "person",
                    "profile",
                    "user-circle"
                ]
            },
            {
                "name": "User Check",
                "id": "user-check",
                "filter": [
                    "users-people",
                    "user-check"
                ]
            },
            {
                "name": "User Astronaut",
                "id": "user-astronaut",
                "filter": [
                    "users-people",
                    "avatar",
                    "clothing",
                    "cosmonaut",
                    "space",
                    "suit",
                    "user-astronaut"
                ]
            },
            {
                "name": "Alternate User Slash",
                "id": "user-alt-slash",
                "filter": [
                    "users-people",
                    "user-alt-slash"
                ]
            },
            {
                "name": "Alternate User",
                "id": "user-alt",
                "filter": [
                    "users-people",
                    "interfaces",
                    "account",
                    "avatar",
                    "head",
                    "man",
                    "person",
                    "profile",
                    "user-alt"
                ]
            },
            {
                "name": "User",
                "id": "user",
                "filter": [
                    "users-people",
                    "interfaces",
                    "account",
                    "avatar",
                    "head",
                    "man",
                    "person",
                    "profile",
                    "user"
                ]
            },
            {
                "name": "USB",
                "id": "usb",
                "filter": [
                    "usb"
                ]
            },
            {
                "name": "Upload",
                "id": "upload",
                "filter": [
                    "computers",
                    "arrows",
                    "interfaces",
                    "export",
                    "publish",
                    "upload"
                ]
            },
            {
                "name": "Untappd",
                "id": "untappd",
                "filter": [
                    "untappd"
                ]
            },
            {
                "name": "Alternate Unlock",
                "id": "unlock-alt",
                "filter": [
                    "status",
                    "objects",
                    "admin",
                    "lock",
                    "password",
                    "protect",
                    "unlock-alt"
                ]
            },
            {
                "name": "unlock",
                "id": "unlock",
                "filter": [
                    "status",
                    "objects",
                    "admin",
                    "lock",
                    "password",
                    "protect",
                    "unlock"
                ]
            },
            {
                "name": "unlink",
                "id": "unlink",
                "filter": [
                    "editors",
                    "chain",
                    "chain-broken",
                    "remove",
                    "unlink"
                ]
            },
            {
                "name": "University",
                "id": "university",
                "filter": [
                    "buildings",
                    "objects",
                    "maps",
                    "bank",
                    "institution",
                    "university"
                ]
            },
            {
                "name": "Universal Access",
                "id": "universal-access",
                "filter": [
                    "accessibility",
                    "universal-access"
                ]
            },
            {
                "name": "Uniregistry",
                "id": "uniregistry",
                "filter": [
                    "uniregistry"
                ]
            },
            {
                "name": "Alternate Undo",
                "id": "undo-alt",
                "filter": [
                    "arrows",
                    "audio-video",
                    "interfaces",
                    "editors",
                    "back",
                    "control z",
                    "exchange",
                    "oops",
                    "return",
                    "swap",
                    "undo-alt"
                ]
            },
            {
                "name": "Undo",
                "id": "undo",
                "filter": [
                    "arrows",
                    "audio-video",
                    "interfaces",
                    "editors",
                    "back",
                    "control z",
                    "exchange",
                    "oops",
                    "return",
                    "rotate",
                    "swap",
                    "undo"
                ]
            },
            {
                "name": "Underline",
                "id": "underline",
                "filter": [
                    "editors",
                    "underline"
                ]
            },
            {
                "name": "Umbrella Beach",
                "id": "umbrella-beach",
                "filter": [
                    "travel",
                    "protection",
                    "recreation",
                    "sun",
                    "umbrella-beach"
                ]
            },
            {
                "name": "Umbrella",
                "id": "umbrella",
                "filter": [
                    "objects",
                    "maps",
                    "protection",
                    "rain",
                    "umbrella"
                ]
            },
            {
                "name": "UIkit",
                "id": "uikit",
                "filter": [
                    "uikit"
                ]
            },
            {
                "name": "Uber",
                "id": "uber",
                "filter": [
                    "uber"
                ]
            },
            {
                "name": "Typo3",
                "id": "typo3",
                "filter": [
                    "typo3"
                ]
            },
            {
                "name": "Twitter Square",
                "id": "twitter-square",
                "filter": [
                    "social network",
                    "tweet",
                    "twitter-square"
                ]
            },
            {
                "name": "Twitter",
                "id": "twitter",
                "filter": [
                    "social network",
                    "tweet",
                    "twitter"
                ]
            },
            {
                "name": "Twitch",
                "id": "twitch",
                "filter": [
                    "twitch"
                ]
            },
            {
                "name": "Television",
                "id": "tv",
                "filter": [
                    "computers",
                    "objects",
                    "computer",
                    "display",
                    "monitor",
                    "television",
                    "tv"
                ]
            },
            {
                "name": "Tumblr Square",
                "id": "tumblr-square",
                "filter": [
                    "tumblr-square"
                ]
            },
            {
                "name": "Tumblr",
                "id": "tumblr",
                "filter": [
                    "tumblr"
                ]
            },
            {
                "name": "TTY",
                "id": "tty",
                "filter": [
                    "communication",
                    "accessibility",
                    "maps",
                    "tty"
                ]
            },
            {
                "name": "T-Shirt",
                "id": "tshirt",
                "filter": [
                    "cloth",
                    "clothing",
                    "tshirt"
                ]
            },
            {
                "name": "Truck Moving",
                "id": "truck-moving",
                "filter": [
                    "moving",
                    "truck-moving"
                ]
            },
            {
                "name": "Truck Loading",
                "id": "truck-loading",
                "filter": [
                    "moving",
                    "truck-loading"
                ]
            },
            {
                "name": "truck",
                "id": "truck",
                "filter": [
                    "logistics",
                    "vehicles",
                    "objects",
                    "maps",
                    "delivery",
                    "shipping",
                    "truck"
                ]
            },
            {
                "name": "trophy",
                "id": "trophy",
                "filter": [
                    "interfaces",
                    "payments-shopping",
                    "objects",
                    "maps",
                    "achievement",
                    "award",
                    "cup",
                    "game",
                    "winner",
                    "trophy"
                ]
            },
            {
                "name": "TripAdvisor",
                "id": "tripadvisor",
                "filter": [
                    "tripadvisor"
                ]
            },
            {
                "name": "Trello",
                "id": "trello",
                "filter": [
                    "trello"
                ]
            },
            {
                "name": "Tree",
                "id": "tree",
                "filter": [
                    "objects",
                    "maps",
                    "tree"
                ]
            },
            {
                "name": "Alternate Trash",
                "id": "trash-alt",
                "filter": [
                    "interfaces",
                    "editors",
                    "objects",
                    "delete",
                    "garbage",
                    "hide",
                    "remove",
                    "trash",
                    "trash-o",
                    "trash-alt"
                ]
            },
            {
                "name": "Trash",
                "id": "trash",
                "filter": [
                    "interfaces",
                    "editors",
                    "objects",
                    "delete",
                    "garbage",
                    "hide",
                    "remove",
                    "trash"
                ]
            },
            {
                "name": "Alternate Transgender",
                "id": "transgender-alt",
                "filter": [
                    "gender",
                    "transgender-alt"
                ]
            },
            {
                "name": "Transgender",
                "id": "transgender",
                "filter": [
                    "gender",
                    "intersex",
                    "transgender"
                ]
            },
            {
                "name": "Train",
                "id": "train",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "bullet",
                    "locomotive",
                    "railway",
                    "train"
                ]
            },
            {
                "name": "Trademark",
                "id": "trademark",
                "filter": [
                    "business",
                    "trademark"
                ]
            },
            {
                "name": "Trade Federation",
                "id": "trade-federation",
                "filter": [
                    "trade-federation"
                ]
            },
            {
                "name": "Tooth",
                "id": "tooth",
                "filter": [
                    "bicuspid",
                    "dental",
                    "molar",
                    "mouth",
                    "teeth",
                    "tooth"
                ]
            },
            {
                "name": "Toolbox",
                "id": "toolbox",
                "filter": [
                    "objects",
                    "admin",
                    "container",
                    "fix",
                    "repair",
                    "settings",
                    "tools",
                    "toolbox"
                ]
            },
            {
                "name": "Toggle On",
                "id": "toggle-on",
                "filter": [
                    "status",
                    "interfaces",
                    "switch",
                    "toggle-on"
                ]
            },
            {
                "name": "Toggle Off",
                "id": "toggle-off",
                "filter": [
                    "status",
                    "interfaces",
                    "switch",
                    "toggle-off"
                ]
            },
            {
                "name": "Tired Face",
                "id": "tired",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "grumpy",
                    "tired"
                ]
            },
            {
                "name": "Tint Slash",
                "id": "tint-slash",
                "filter": [
                    "design",
                    "tint-slash"
                ]
            },
            {
                "name": "tint",
                "id": "tint",
                "filter": [
                    "images",
                    "design",
                    "maps",
                    "drop",
                    "droplet",
                    "raindrop",
                    "waterdrop",
                    "tint"
                ]
            },
            {
                "name": "Times Circle",
                "id": "times-circle",
                "filter": [
                    "interfaces",
                    "close",
                    "cross",
                    "exit",
                    "incorrect",
                    "notice",
                    "notification",
                    "notify",
                    "problem",
                    "wrong",
                    "x",
                    "times-circle"
                ]
            },
            {
                "name": "Times",
                "id": "times",
                "filter": [
                    "mathematics",
                    "interfaces",
                    "close",
                    "cross",
                    "error",
                    "exit",
                    "incorrect",
                    "notice",
                    "notification",
                    "notify",
                    "problem",
                    "wrong",
                    "x",
                    "times"
                ]
            },
            {
                "name": "Alternate Ticket",
                "id": "ticket-alt",
                "filter": [
                    "objects",
                    "maps",
                    "ticket",
                    "ticket-alt"
                ]
            },
            {
                "name": "Thumbtack",
                "id": "thumbtack",
                "filter": [
                    "writing",
                    "business",
                    "objects",
                    "maps",
                    "coordinates",
                    "location",
                    "marker",
                    "pin",
                    "thumb-tack",
                    "thumbtack"
                ]
            },
            {
                "name": "thumbs-up",
                "id": "thumbs-up",
                "filter": [
                    "status",
                    "hands",
                    "interfaces",
                    "payments-shopping",
                    "agree",
                    "approve",
                    "favorite",
                    "hand",
                    "like",
                    "ok",
                    "okay",
                    "success",
                    "thumbs-o-up",
                    "yes",
                    "you got it dude",
                    "thumbs-up"
                ]
            },
            {
                "name": "thumbs-down",
                "id": "thumbs-down",
                "filter": [
                    "status",
                    "hands",
                    "interfaces",
                    "payments-shopping",
                    "disagree",
                    "disapprove",
                    "dislike",
                    "hand",
                    "thumbs-o-down",
                    "thumbs-down"
                ]
            },
            {
                "name": "Thermometer 3/4 Full",
                "id": "thermometer-three-quarters",
                "filter": [
                    "status",
                    "status",
                    "thermometer-three-quarters"
                ]
            },
            {
                "name": "Thermometer 1/4 Full",
                "id": "thermometer-quarter",
                "filter": [
                    "status",
                    "status",
                    "thermometer-quarter"
                ]
            },
            {
                "name": "Thermometer 1/2 Full",
                "id": "thermometer-half",
                "filter": [
                    "status",
                    "status",
                    "thermometer-half"
                ]
            },
            {
                "name": "Thermometer Full",
                "id": "thermometer-full",
                "filter": [
                    "status",
                    "status",
                    "thermometer-full"
                ]
            },
            {
                "name": "Thermometer Empty",
                "id": "thermometer-empty",
                "filter": [
                    "status",
                    "status",
                    "thermometer-empty"
                ]
            },
            {
                "name": "Thermometer",
                "id": "thermometer",
                "filter": [
                    "medical",
                    "fever",
                    "temperature",
                    "thermometer"
                ]
            },
            {
                "name": "ThemeIsle",
                "id": "themeisle",
                "filter": [
                    "themeisle"
                ]
            },
            {
                "name": "Themeco",
                "id": "themeco",
                "filter": [
                    "themeco"
                ]
            },
            {
                "name": "th-list",
                "id": "th-list",
                "filter": [
                    "editors",
                    "checklist",
                    "completed",
                    "done",
                    "finished",
                    "ol",
                    "todo",
                    "ul",
                    "th-list"
                ]
            },
            {
                "name": "th-large",
                "id": "th-large",
                "filter": [
                    "editors",
                    "blocks",
                    "boxes",
                    "grid",
                    "squares",
                    "th-large"
                ]
            },
            {
                "name": "th",
                "id": "th",
                "filter": [
                    "editors",
                    "blocks",
                    "boxes",
                    "grid",
                    "squares",
                    "th"
                ]
            },
            {
                "name": "text-width",
                "id": "text-width",
                "filter": [
                    "arrows",
                    "editors",
                    "text-width"
                ]
            },
            {
                "name": "text-height",
                "id": "text-height",
                "filter": [
                    "arrows",
                    "editors",
                    "text-height"
                ]
            },
            {
                "name": "Terminal",
                "id": "terminal",
                "filter": [
                    "code",
                    "code",
                    "command",
                    "console",
                    "prompt",
                    "terminal"
                ]
            },
            {
                "name": "Tencent Weibo",
                "id": "tencent-weibo",
                "filter": [
                    "tencent-weibo"
                ]
            },
            {
                "name": "Telegram Plane",
                "id": "telegram-plane",
                "filter": [
                    "telegram-plane"
                ]
            },
            {
                "name": "Telegram",
                "id": "telegram",
                "filter": [
                    "telegram"
                ]
            },
            {
                "name": "TeamSpeak",
                "id": "teamspeak",
                "filter": [
                    "teamspeak"
                ]
            },
            {
                "name": "Taxi",
                "id": "taxi",
                "filter": [
                    "travel",
                    "vehicles",
                    "objects",
                    "maps",
                    "cab",
                    "cabbie",
                    "car",
                    "car service",
                    "lyft",
                    "machine",
                    "transportation",
                    "uber",
                    "vehicle",
                    "taxi"
                ]
            },
            {
                "name": "Tasks",
                "id": "tasks",
                "filter": [
                    "editors",
                    "business",
                    "downloading",
                    "downloads",
                    "loading",
                    "progress",
                    "settings",
                    "tasks"
                ]
            },
            {
                "name": "Tape",
                "id": "tape",
                "filter": [
                    "moving",
                    "tape"
                ]
            },
            {
                "name": "tags",
                "id": "tags",
                "filter": [
                    "payments-shopping",
                    "business",
                    "objects",
                    "maps",
                    "labels",
                    "tags"
                ]
            },
            {
                "name": "tag",
                "id": "tag",
                "filter": [
                    "payments-shopping",
                    "business",
                    "objects",
                    "maps",
                    "label",
                    "tag"
                ]
            },
            {
                "name": "Alternate Tachometer",
                "id": "tachometer-alt",
                "filter": [
                    "objects",
                    "dashboard",
                    "tachometer",
                    "tachometer-alt"
                ]
            },
            {
                "name": "Tablets",
                "id": "tablets",
                "filter": [
                    "medical",
                    "drugs",
                    "medicine",
                    "tablets"
                ]
            },
            {
                "name": "Alternate Tablet",
                "id": "tablet-alt",
                "filter": [
                    "computers",
                    "objects",
                    "apple",
                    "device",
                    "ipad",
                    "kindle",
                    "screen",
                    "tablet-alt"
                ]
            },
            {
                "name": "tablet",
                "id": "tablet",
                "filter": [
                    "computers",
                    "objects",
                    "apple",
                    "device",
                    "ipad",
                    "kindle",
                    "screen",
                    "tablet"
                ]
            },
            {
                "name": "Table Tennis",
                "id": "table-tennis",
                "filter": [
                    "sports",
                    "table-tennis"
                ]
            },
            {
                "name": "table",
                "id": "table",
                "filter": [
                    "editors",
                    "business",
                    "data",
                    "excel",
                    "spreadsheet",
                    "table"
                ]
            },
            {
                "name": "Syringe",
                "id": "syringe",
                "filter": [
                    "medical",
                    "immunizations",
                    "needle",
                    "syringe"
                ]
            },
            {
                "name": "Alternate Sync",
                "id": "sync-alt",
                "filter": [
                    "arrows",
                    "audio-video",
                    "interfaces",
                    "editors",
                    "refresh",
                    "reload",
                    "rotate",
                    "sync-alt"
                ]
            },
            {
                "name": "Sync",
                "id": "sync",
                "filter": [
                    "arrows",
                    "audio-video",
                    "spinners",
                    "interfaces",
                    "editors",
                    "exchange",
                    "refresh",
                    "reload",
                    "rotate",
                    "swap",
                    "sync"
                ]
            },
            {
                "name": "Swimming Pool",
                "id": "swimming-pool",
                "filter": [
                    "travel",
                    "ladder",
                    "recreation",
                    "water",
                    "swimming-pool"
                ]
            },
            {
                "name": "Swimmer",
                "id": "swimmer",
                "filter": [
                    "travel",
                    "athlete",
                    "head",
                    "man",
                    "person",
                    "water",
                    "swimmer"
                ]
            },
            {
                "name": "Swatchbook",
                "id": "swatchbook",
                "filter": [
                    "design",
                    "swatchbook"
                ]
            },
            {
                "name": "Hushed Face",
                "id": "surprise",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "shocked",
                    "surprise"
                ]
            },
            {
                "name": "Supple",
                "id": "supple",
                "filter": [
                    "supple"
                ]
            },
            {
                "name": "superscript",
                "id": "superscript",
                "filter": [
                    "mathematics",
                    "editors",
                    "exponential",
                    "superscript"
                ]
            },
            {
                "name": "Superpowers",
                "id": "superpowers",
                "filter": [
                    "superpowers"
                ]
            },
            {
                "name": "Sun",
                "id": "sun",
                "filter": [
                    "spinners",
                    "objects",
                    "brighten",
                    "contrast",
                    "day",
                    "lighter",
                    "weather",
                    "sun"
                ]
            },
            {
                "name": "Suitcase Rolling",
                "id": "suitcase-rolling",
                "filter": [
                    "travel",
                    "suitcase-rolling"
                ]
            },
            {
                "name": "Suitcase",
                "id": "suitcase",
                "filter": [
                    "travel",
                    "moving",
                    "business",
                    "objects",
                    "maps",
                    "baggage",
                    "luggage",
                    "move",
                    "suitcase",
                    "travel",
                    "trip",
                    "suitcase"
                ]
            },
            {
                "name": "Subway",
                "id": "subway",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "machine",
                    "railway",
                    "train",
                    "transportation",
                    "vehicle",
                    "subway"
                ]
            },
            {
                "name": "subscript",
                "id": "subscript",
                "filter": [
                    "mathematics",
                    "editors",
                    "subscript"
                ]
            },
            {
                "name": "StumbleUpon Circle",
                "id": "stumbleupon-circle",
                "filter": [
                    "stumbleupon-circle"
                ]
            },
            {
                "name": "StumbleUpon Logo",
                "id": "stumbleupon",
                "filter": [
                    "stumbleupon"
                ]
            },
            {
                "name": "Studio Vinari",
                "id": "studiovinari",
                "filter": [
                    "studiovinari"
                ]
            },
            {
                "name": "Stroopwafel",
                "id": "stroopwafel",
                "filter": [
                    "objects",
                    "dessert",
                    "food",
                    "sweets",
                    "waffle",
                    "stroopwafel"
                ]
            },
            {
                "name": "Stripe S",
                "id": "stripe-s",
                "filter": [
                    "payments-shopping",
                    "stripe-s"
                ]
            },
            {
                "name": "Stripe",
                "id": "stripe",
                "filter": [
                    "payments-shopping",
                    "stripe"
                ]
            },
            {
                "name": "Strikethrough",
                "id": "strikethrough",
                "filter": [
                    "editors",
                    "strikethrough"
                ]
            },
            {
                "name": "Street View",
                "id": "street-view",
                "filter": [
                    "users-people",
                    "maps",
                    "map",
                    "street-view"
                ]
            },
            {
                "name": "Stream",
                "id": "stream",
                "filter": [
                    "computers",
                    "status",
                    "business",
                    "code",
                    "stream"
                ]
            },
            {
                "name": "Strava",
                "id": "strava",
                "filter": [
                    "strava"
                ]
            },
            {
                "name": "Alternate Store",
                "id": "store-alt",
                "filter": [
                    "store-alt"
                ]
            },
            {
                "name": "Store",
                "id": "store",
                "filter": [
                    "store"
                ]
            },
            {
                "name": "Stopwatch",
                "id": "stopwatch",
                "filter": [
                    "date-time",
                    "objects",
                    "time",
                    "stopwatch"
                ]
            },
            {
                "name": "Stop Circle",
                "id": "stop-circle",
                "filter": [
                    "audio-video",
                    "stop-circle"
                ]
            },
            {
                "name": "stop",
                "id": "stop",
                "filter": [
                    "audio-video",
                    "block",
                    "box",
                    "square",
                    "stop"
                ]
            },
            {
                "name": "Sticky Note",
                "id": "sticky-note",
                "filter": [
                    "files",
                    "writing",
                    "business",
                    "objects",
                    "sticky-note"
                ]
            },
            {
                "name": "Sticker Mule",
                "id": "sticker-mule",
                "filter": [
                    "sticker-mule"
                ]
            },
            {
                "name": "Stethoscope",
                "id": "stethoscope",
                "filter": [
                    "medical",
                    "health",
                    "stethoscope"
                ]
            },
            {
                "name": "step-forward",
                "id": "step-forward",
                "filter": [
                    "audio-video",
                    "end",
                    "last",
                    "next",
                    "step-forward"
                ]
            },
            {
                "name": "step-backward",
                "id": "step-backward",
                "filter": [
                    "audio-video",
                    "beginning",
                    "first",
                    "previous",
                    "rewind",
                    "start",
                    "step-backward"
                ]
            },
            {
                "name": "Steam Symbol",
                "id": "steam-symbol",
                "filter": [
                    "steam-symbol"
                ]
            },
            {
                "name": "Steam Square",
                "id": "steam-square",
                "filter": [
                    "steam-square"
                ]
            },
            {
                "name": "Steam",
                "id": "steam",
                "filter": [
                    "steam"
                ]
            },
            {
                "name": "StayLinked",
                "id": "staylinked",
                "filter": [
                    "staylinked"
                ]
            },
            {
                "name": "Alternate Star Half",
                "id": "star-half-alt",
                "filter": [
                    "achievement",
                    "award",
                    "rating",
                    "score",
                    "star-half-empty",
                    "star-half-full",
                    "star-half-alt"
                ]
            },
            {
                "name": "star-half",
                "id": "star-half",
                "filter": [
                    "interfaces",
                    "achievement",
                    "award",
                    "rating",
                    "score",
                    "star-half-empty",
                    "star-half-full",
                    "star-half"
                ]
            },
            {
                "name": "Star",
                "id": "star",
                "filter": [
                    "shapes",
                    "interfaces",
                    "payments-shopping",
                    "objects",
                    "achievement",
                    "award",
                    "favorite",
                    "important",
                    "night",
                    "rating",
                    "score",
                    "star"
                ]
            },
            {
                "name": "Stamp",
                "id": "stamp",
                "filter": [
                    "design",
                    "stamp"
                ]
            },
            {
                "name": "Stack Overflow",
                "id": "stack-overflow",
                "filter": [
                    "stack-overflow"
                ]
            },
            {
                "name": "Stack Exchange",
                "id": "stack-exchange",
                "filter": [
                    "stack-exchange"
                ]
            },
            {
                "name": "Squarespace",
                "id": "squarespace",
                "filter": [
                    "squarespace"
                ]
            },
            {
                "name": "Square Full",
                "id": "square-full",
                "filter": [
                    "chess",
                    "square-full"
                ]
            },
            {
                "name": "Square",
                "id": "square",
                "filter": [
                    "shapes",
                    "block",
                    "box",
                    "square"
                ]
            },
            {
                "name": "Spray Can",
                "id": "spray-can",
                "filter": [
                    "design",
                    "spray-can"
                ]
            },
            {
                "name": "Spotify",
                "id": "spotify",
                "filter": [
                    "spotify"
                ]
            },
            {
                "name": "Splotch",
                "id": "splotch",
                "filter": [
                    "design",
                    "splotch"
                ]
            },
            {
                "name": "Spinner",
                "id": "spinner",
                "filter": [
                    "spinners",
                    "loading",
                    "progress",
                    "spinner"
                ]
            },
            {
                "name": "Speakap",
                "id": "speakap",
                "filter": [
                    "speakap"
                ]
            },
            {
                "name": "Space Shuttle",
                "id": "space-shuttle",
                "filter": [
                    "vehicles",
                    "objects",
                    "astronaut",
                    "machine",
                    "nasa",
                    "rocket",
                    "transportation",
                    "space-shuttle"
                ]
            },
            {
                "name": "Spa",
                "id": "spa",
                "filter": [
                    "travel",
                    "mindfullness",
                    "plant",
                    "wellness",
                    "spa"
                ]
            },
            {
                "name": "SoundCloud",
                "id": "soundcloud",
                "filter": [
                    "soundcloud"
                ]
            },
            {
                "name": "Sort Up (Ascending)",
                "id": "sort-up",
                "filter": [
                    "arrows",
                    "interfaces",
                    "arrow",
                    "ascending",
                    "sort-asc",
                    "sort-up"
                ]
            },
            {
                "name": "Sort Numeric Up",
                "id": "sort-numeric-up",
                "filter": [
                    "arrows",
                    "interfaces",
                    "numbers",
                    "sort-numeric-desc",
                    "sort-numeric-up"
                ]
            },
            {
                "name": "Sort Numeric Down",
                "id": "sort-numeric-down",
                "filter": [
                    "arrows",
                    "interfaces",
                    "numbers",
                    "sort-numeric-asc",
                    "sort-numeric-down"
                ]
            },
            {
                "name": "Sort Down (Descending)",
                "id": "sort-down",
                "filter": [
                    "arrows",
                    "interfaces",
                    "arrow",
                    "descending",
                    "sort-desc",
                    "sort-down"
                ]
            },
            {
                "name": "Sort Amount Up",
                "id": "sort-amount-up",
                "filter": [
                    "arrows",
                    "interfaces",
                    "sort-amount-desc",
                    "sort-amount-up"
                ]
            },
            {
                "name": "Sort Amount Down",
                "id": "sort-amount-down",
                "filter": [
                    "arrows",
                    "interfaces",
                    "sort-amount-asc",
                    "sort-amount-down"
                ]
            },
            {
                "name": "Sort Alpha Up",
                "id": "sort-alpha-up",
                "filter": [
                    "arrows",
                    "interfaces",
                    "sort-alpha-desc",
                    "sort-alpha-up"
                ]
            },
            {
                "name": "Sort Alpha Down",
                "id": "sort-alpha-down",
                "filter": [
                    "arrows",
                    "interfaces",
                    "sort-alpha-asc",
                    "sort-alpha-down"
                ]
            },
            {
                "name": "Sort",
                "id": "sort",
                "filter": [
                    "arrows",
                    "interfaces",
                    "order",
                    "sort"
                ]
            },
            {
                "name": "Solar Panel",
                "id": "solar-panel",
                "filter": [
                    "clean",
                    "eco-friendly",
                    "energy",
                    "green",
                    "sun",
                    "solar-panel"
                ]
            },
            {
                "name": "Snowflake",
                "id": "snowflake",
                "filter": [
                    "spinners",
                    "objects",
                    "snowflake"
                ]
            },
            {
                "name": "Snapchat Square",
                "id": "snapchat-square",
                "filter": [
                    "snapchat-square"
                ]
            },
            {
                "name": "Snapchat Ghost",
                "id": "snapchat-ghost",
                "filter": [
                    "snapchat-ghost"
                ]
            },
            {
                "name": "Snapchat",
                "id": "snapchat",
                "filter": [
                    "snapchat"
                ]
            },
            {
                "name": "Smoking Ban",
                "id": "smoking-ban",
                "filter": [
                    "no smoking",
                    "non-smoking",
                    "smoking-ban"
                ]
            },
            {
                "name": "Smoking",
                "id": "smoking",
                "filter": [
                    "medical",
                    "cigarette",
                    "nicotine",
                    "smoking status",
                    "smoking"
                ]
            },
            {
                "name": "Winking Face",
                "id": "smile-wink",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "happy",
                    "smile-wink"
                ]
            },
            {
                "name": "Beaming Face With Smiling Eyes",
                "id": "smile-beam",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "happy",
                    "smile-beam"
                ]
            },
            {
                "name": "Smiling Face",
                "id": "smile",
                "filter": [
                    "users-people",
                    "chat",
                    "interfaces",
                    "emoji",
                    "approve",
                    "emoticon",
                    "face",
                    "happy",
                    "rating",
                    "satisfied",
                    "smile"
                ]
            },
            {
                "name": "Slideshare",
                "id": "slideshare",
                "filter": [
                    "slideshare"
                ]
            },
            {
                "name": "Horizontal Sliders",
                "id": "sliders-h",
                "filter": [
                    "images",
                    "interfaces",
                    "settings",
                    "sliders",
                    "sliders-h"
                ]
            },
            {
                "name": "Slack Hashtag",
                "id": "slack-hash",
                "filter": [
                    "anchor",
                    "hash",
                    "hashtag",
                    "slack-hash"
                ]
            },
            {
                "name": "Slack Logo",
                "id": "slack",
                "filter": [
                    "anchor",
                    "hash",
                    "hashtag",
                    "slack"
                ]
            },
            {
                "name": "Skype",
                "id": "skype",
                "filter": [
                    "skype"
                ]
            },
            {
                "name": "skyatlas",
                "id": "skyatlas",
                "filter": [
                    "skyatlas"
                ]
            },
            {
                "name": "Skull",
                "id": "skull",
                "filter": [
                    "bones",
                    "skeleton",
                    "yorick",
                    "skull"
                ]
            },
            {
                "name": "Sith",
                "id": "sith",
                "filter": [
                    "sith"
                ]
            },
            {
                "name": "Sitemap",
                "id": "sitemap",
                "filter": [
                    "interfaces",
                    "business",
                    "code",
                    "directory",
                    "hierarchy",
                    "ia",
                    "information architecture",
                    "organization",
                    "sitemap"
                ]
            },
            {
                "name": "SISTRIX",
                "id": "sistrix",
                "filter": [
                    "sistrix"
                ]
            },
            {
                "name": "SimplyBuilt",
                "id": "simplybuilt",
                "filter": [
                    "simplybuilt"
                ]
            },
            {
                "name": "Signature",
                "id": "signature",
                "filter": [
                    "John Hancock",
                    "cursive",
                    "name",
                    "writing",
                    "signature"
                ]
            },
            {
                "name": "signal",
                "id": "signal",
                "filter": [
                    "interfaces",
                    "bars",
                    "graph",
                    "online",
                    "status",
                    "signal"
                ]
            },
            {
                "name": "Alternate Sign Out",
                "id": "sign-out-alt",
                "filter": [
                    "status",
                    "arrows",
                    "interfaces",
                    "arrow",
                    "exit",
                    "leave",
                    "log out",
                    "logout",
                    "sign-out",
                    "sign-out-alt"
                ]
            },
            {
                "name": "Sign Language",
                "id": "sign-language",
                "filter": [
                    "accessibility",
                    "sign-language"
                ]
            },
            {
                "name": "Alternate Sign In",
                "id": "sign-in-alt",
                "filter": [
                    "status",
                    "arrows",
                    "interfaces",
                    "arrow",
                    "enter",
                    "join",
                    "log in",
                    "login",
                    "sign in",
                    "sign up",
                    "sign-in",
                    "signin",
                    "signup",
                    "sign-in-alt"
                ]
            },
            {
                "name": "Sign",
                "id": "sign",
                "filter": [
                    "moving",
                    "sign"
                ]
            },
            {
                "name": "Shuttle Van",
                "id": "shuttle-van",
                "filter": [
                    "travel",
                    "machine",
                    "public-transportation",
                    "transportation",
                    "vehicle",
                    "shuttle-van"
                ]
            },
            {
                "name": "Shower",
                "id": "shower",
                "filter": [
                    "objects",
                    "maps",
                    "shower"
                ]
            },
            {
                "name": "Shopware",
                "id": "shopware",
                "filter": [
                    "shopware"
                ]
            },
            {
                "name": "shopping-cart",
                "id": "shopping-cart",
                "filter": [
                    "vehicles",
                    "status",
                    "payments-shopping",
                    "objects",
                    "maps",
                    "buy",
                    "checkout",
                    "payment",
                    "purchase",
                    "shopping-cart"
                ]
            },
            {
                "name": "Shopping Basket",
                "id": "shopping-basket",
                "filter": [
                    "payments-shopping",
                    "objects",
                    "maps",
                    "shopping-basket"
                ]
            },
            {
                "name": "Shopping Bag",
                "id": "shopping-bag",
                "filter": [
                    "payments-shopping",
                    "objects",
                    "maps",
                    "shopping-bag"
                ]
            },
            {
                "name": "Shoe Prints",
                "id": "shoe-prints",
                "filter": [
                    "maps",
                    "feet",
                    "footprints",
                    "steps",
                    "shoe-prints"
                ]
            },
            {
                "name": "Shirts in Bulk",
                "id": "shirtsinbulk",
                "filter": [
                    "shirtsinbulk"
                ]
            },
            {
                "name": "Shipping Fast",
                "id": "shipping-fast",
                "filter": [
                    "logistics",
                    "shipping-fast"
                ]
            },
            {
                "name": "Ship",
                "id": "ship",
                "filter": [
                    "vehicles",
                    "maps",
                    "boat",
                    "sea",
                    "ship"
                ]
            },
            {
                "name": "Alternate Shield",
                "id": "shield-alt",
                "filter": [
                    "status",
                    "interfaces",
                    "objects",
                    "code",
                    "shield",
                    "shield-alt"
                ]
            },
            {
                "name": "Shekel Sign",
                "id": "shekel-sign",
                "filter": [
                    "currency",
                    "ils",
                    "ils",
                    "shekel-sign"
                ]
            },
            {
                "name": "Share Square",
                "id": "share-square",
                "filter": [
                    "arrows",
                    "interfaces",
                    "send",
                    "social",
                    "share-square"
                ]
            },
            {
                "name": "Alternate Share Square",
                "id": "share-alt-square",
                "filter": [
                    "interfaces",
                    "share-alt-square"
                ]
            },
            {
                "name": "Alternate Share",
                "id": "share-alt",
                "filter": [
                    "interfaces",
                    "share-alt"
                ]
            },
            {
                "name": "Share",
                "id": "share",
                "filter": [
                    "arrows",
                    "interfaces",
                    "editors",
                    "share"
                ]
            },
            {
                "name": "Servicestack",
                "id": "servicestack",
                "filter": [
                    "servicestack"
                ]
            },
            {
                "name": "Server",
                "id": "server",
                "filter": [
                    "computers",
                    "cpu",
                    "server"
                ]
            },
            {
                "name": "Sellsy",
                "id": "sellsy",
                "filter": [
                    "sellsy"
                ]
            },
            {
                "name": "Sellcast",
                "id": "sellcast",
                "filter": [
                    "eercast",
                    "sellcast"
                ]
            },
            {
                "name": "Seedling",
                "id": "seedling",
                "filter": [
                    "charity",
                    "seedling"
                ]
            },
            {
                "name": "Searchengin",
                "id": "searchengin",
                "filter": [
                    "searchengin"
                ]
            },
            {
                "name": "Search Plus",
                "id": "search-plus",
                "filter": [
                    "interfaces",
                    "maps",
                    "bigger",
                    "enlarge",
                    "magnify",
                    "zoom",
                    "zoom in",
                    "search-plus"
                ]
            },
            {
                "name": "Search Minus",
                "id": "search-minus",
                "filter": [
                    "interfaces",
                    "maps",
                    "magnify",
                    "minify",
                    "smaller",
                    "zoom",
                    "zoom out",
                    "search-minus"
                ]
            },
            {
                "name": "Search",
                "id": "search",
                "filter": [
                    "interfaces",
                    "objects",
                    "maps",
                    "bigger",
                    "enlarge",
                    "magnify",
                    "preview",
                    "zoom",
                    "search"
                ]
            },
            {
                "name": "Scribd",
                "id": "scribd",
                "filter": [
                    "scribd"
                ]
            },
            {
                "name": "Screwdriver",
                "id": "screwdriver",
                "filter": [
                    "interfaces",
                    "editors",
                    "objects",
                    "admin",
                    "container",
                    "fix",
                    "repair",
                    "settings",
                    "tool",
                    "screwdriver"
                ]
            },
            {
                "name": "School",
                "id": "school",
                "filter": [
                    "buildings",
                    "objects",
                    "school"
                ]
            },
            {
                "name": "SCHLIX",
                "id": "schlix",
                "filter": [
                    "schlix"
                ]
            },
            {
                "name": "Save",
                "id": "save",
                "filter": [
                    "files",
                    "computers",
                    "design",
                    "interfaces",
                    "business",
                    "objects",
                    "floppy",
                    "floppy-o",
                    "save"
                ]
            },
            {
                "name": "Sass",
                "id": "sass",
                "filter": [
                    "sass"
                ]
            },
            {
                "name": "Safari",
                "id": "safari",
                "filter": [
                    "browser",
                    "safari"
                ]
            },
            {
                "name": "Loudly Crying Face",
                "id": "sad-tear",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "tear",
                    "tears",
                    "sad-tear"
                ]
            },
            {
                "name": "Crying Face",
                "id": "sad-cry",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "tear",
                    "tears",
                    "sad-cry"
                ]
            },
            {
                "name": "Indian Rupee Sign",
                "id": "rupee-sign",
                "filter": [
                    "currency",
                    "indian",
                    "inr",
                    "rupee-sign"
                ]
            },
            {
                "name": "Ruler Vertical",
                "id": "ruler-vertical",
                "filter": [
                    "design",
                    "objects",
                    "ruler-vertical"
                ]
            },
            {
                "name": "Ruler Horizontal",
                "id": "ruler-horizontal",
                "filter": [
                    "design",
                    "objects",
                    "ruler-horizontal"
                ]
            },
            {
                "name": "Ruler Combined",
                "id": "ruler-combined",
                "filter": [
                    "design",
                    "objects",
                    "ruler-combined"
                ]
            },
            {
                "name": "Ruler",
                "id": "ruler",
                "filter": [
                    "ruler"
                ]
            },
            {
                "name": "Ruble Sign",
                "id": "ruble-sign",
                "filter": [
                    "currency",
                    "rub",
                    "rub",
                    "ruble-sign"
                ]
            },
            {
                "name": "RSS Square",
                "id": "rss-square",
                "filter": [
                    "audio-video",
                    "interfaces",
                    "communication",
                    "blog",
                    "feed",
                    "rss-square"
                ]
            },
            {
                "name": "rss",
                "id": "rss",
                "filter": [
                    "audio-video",
                    "interfaces",
                    "communication",
                    "blog",
                    "rss"
                ]
            },
            {
                "name": "Rockrms",
                "id": "rockrms",
                "filter": [
                    "rockrms"
                ]
            },
            {
                "name": "Rocket.Chat",
                "id": "rocketchat",
                "filter": [
                    "rocketchat"
                ]
            },
            {
                "name": "rocket",
                "id": "rocket",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "app",
                    "rocket"
                ]
            },
            {
                "name": "Robot",
                "id": "robot",
                "filter": [
                    "robot"
                ]
            },
            {
                "name": "road",
                "id": "road",
                "filter": [
                    "objects",
                    "maps",
                    "street",
                    "road"
                ]
            },
            {
                "name": "Ribbon",
                "id": "ribbon",
                "filter": [
                    "charity",
                    "badge",
                    "cause",
                    "lapel",
                    "pin",
                    "ribbon"
                ]
            },
            {
                "name": "Rev.io",
                "id": "rev",
                "filter": [
                    "rev"
                ]
            },
            {
                "name": "Retweet",
                "id": "retweet",
                "filter": [
                    "arrows",
                    "refresh",
                    "reload",
                    "share",
                    "swap",
                    "retweet"
                ]
            },
            {
                "name": "Resolving",
                "id": "resolving",
                "filter": [
                    "resolving"
                ]
            },
            {
                "name": "Researchgate",
                "id": "researchgate",
                "filter": [
                    "researchgate"
                ]
            },
            {
                "name": "replyd",
                "id": "replyd",
                "filter": [
                    "replyd"
                ]
            },
            {
                "name": "reply-all",
                "id": "reply-all",
                "filter": [
                    "arrows",
                    "interfaces",
                    "editors",
                    "reply-all"
                ]
            },
            {
                "name": "Reply",
                "id": "reply",
                "filter": [
                    "arrows",
                    "interfaces",
                    "editors",
                    "reply"
                ]
            },
            {
                "name": "Renren",
                "id": "renren",
                "filter": [
                    "renren"
                ]
            },
            {
                "name": "Rendact",
                "id": "rendact",
                "filter": [
                    "rendact"
                ]
            },
            {
                "name": "Registered Trademark",
                "id": "registered",
                "filter": [
                    "business",
                    "registered"
                ]
            },
            {
                "name": "Alternate Redo",
                "id": "redo-alt",
                "filter": [
                    "arrows",
                    "audio-video",
                    "interfaces",
                    "editors",
                    "forward",
                    "repeat",
                    "redo-alt"
                ]
            },
            {
                "name": "Redo",
                "id": "redo",
                "filter": [
                    "arrows",
                    "audio-video",
                    "interfaces",
                    "editors",
                    "forward",
                    "repeat",
                    "repeat",
                    "redo"
                ]
            },
            {
                "name": "reddit Square",
                "id": "reddit-square",
                "filter": [
                    "reddit-square"
                ]
            },
            {
                "name": "reddit Alien",
                "id": "reddit-alien",
                "filter": [
                    "reddit-alien"
                ]
            },
            {
                "name": "reddit Logo",
                "id": "reddit",
                "filter": [
                    "reddit"
                ]
            },
            {
                "name": "red river",
                "id": "red-river",
                "filter": [
                    "red-river"
                ]
            },
            {
                "name": "Recycle",
                "id": "recycle",
                "filter": [
                    "arrows",
                    "maps",
                    "recycle"
                ]
            },
            {
                "name": "Receipt",
                "id": "receipt",
                "filter": [
                    "check",
                    "invoice",
                    "table",
                    "receipt"
                ]
            },
            {
                "name": "Rebel Alliance",
                "id": "rebel",
                "filter": [
                    "rebel"
                ]
            },
            {
                "name": "ReadMe",
                "id": "readme",
                "filter": [
                    "readme"
                ]
            },
            {
                "name": "React",
                "id": "react",
                "filter": [
                    "react"
                ]
            },
            {
                "name": "Ravelry",
                "id": "ravelry",
                "filter": [
                    "ravelry"
                ]
            },
            {
                "name": "random",
                "id": "random",
                "filter": [
                    "arrows",
                    "audio-video",
                    "shuffle",
                    "sort",
                    "random"
                ]
            },
            {
                "name": "R Project",
                "id": "r-project",
                "filter": [
                    "r-project"
                ]
            },
            {
                "name": "quote-right",
                "id": "quote-right",
                "filter": [
                    "chat",
                    "writing",
                    "interfaces",
                    "editors",
                    "quote-right"
                ]
            },
            {
                "name": "quote-left",
                "id": "quote-left",
                "filter": [
                    "chat",
                    "writing",
                    "interfaces",
                    "editors",
                    "quote-left"
                ]
            },
            {
                "name": "Quora",
                "id": "quora",
                "filter": [
                    "quora"
                ]
            },
            {
                "name": "QuinScape",
                "id": "quinscape",
                "filter": [
                    "quinscape"
                ]
            },
            {
                "name": "Quidditch",
                "id": "quidditch",
                "filter": [
                    "sports",
                    "quidditch"
                ]
            },
            {
                "name": "Question Circle",
                "id": "question-circle",
                "filter": [
                    "status",
                    "interfaces",
                    "accessibility",
                    "help",
                    "information",
                    "support",
                    "unknown",
                    "question-circle"
                ]
            },
            {
                "name": "Question",
                "id": "question",
                "filter": [
                    "status",
                    "interfaces",
                    "help",
                    "information",
                    "support",
                    "unknown",
                    "question"
                ]
            },
            {
                "name": "qrcode",
                "id": "qrcode",
                "filter": [
                    "interfaces",
                    "code",
                    "scan",
                    "qrcode"
                ]
            },
            {
                "name": "QQ",
                "id": "qq",
                "filter": [
                    "qq"
                ]
            },
            {
                "name": "Python",
                "id": "python",
                "filter": [
                    "python"
                ]
            },
            {
                "name": "Puzzle Piece",
                "id": "puzzle-piece",
                "filter": [
                    "objects",
                    "add-on",
                    "addon",
                    "section",
                    "puzzle-piece"
                ]
            },
            {
                "name": "Pushed",
                "id": "pushed",
                "filter": [
                    "pushed"
                ]
            },
            {
                "name": "Project Diagram",
                "id": "project-diagram",
                "filter": [
                    "business",
                    "code",
                    "project-diagram"
                ]
            },
            {
                "name": "Product Hunt",
                "id": "product-hunt",
                "filter": [
                    "product-hunt"
                ]
            },
            {
                "name": "Procedures",
                "id": "procedures",
                "filter": [
                    "medical",
                    "procedures"
                ]
            },
            {
                "name": "print",
                "id": "print",
                "filter": [
                    "computers",
                    "editors",
                    "objects",
                    "maps",
                    "print"
                ]
            },
            {
                "name": "Alternate Prescription Bottle",
                "id": "prescription-bottle-alt",
                "filter": [
                    "medical",
                    "drugs",
                    "medical",
                    "medicine",
                    "rx",
                    "prescription-bottle-alt"
                ]
            },
            {
                "name": "Prescription Bottle",
                "id": "prescription-bottle",
                "filter": [
                    "medical",
                    "drugs",
                    "medical",
                    "medicine",
                    "rx",
                    "prescription-bottle"
                ]
            },
            {
                "name": "Prescription",
                "id": "prescription",
                "filter": [
                    "medical",
                    "health",
                    "drugs",
                    "medical",
                    "medicine",
                    "rx",
                    "prescription"
                ]
            },
            {
                "name": "Power Off",
                "id": "power-off",
                "filter": [
                    "users-people",
                    "computers",
                    "on",
                    "reboot",
                    "restart",
                    "power-off"
                ]
            },
            {
                "name": "Pound Sign",
                "id": "pound-sign",
                "filter": [
                    "currency",
                    "gbp",
                    "gbp",
                    "pound-sign"
                ]
            },
            {
                "name": "Portrait",
                "id": "portrait",
                "filter": [
                    "users-people",
                    "images",
                    "portrait"
                ]
            },
            {
                "name": "Poo",
                "id": "poo",
                "filter": [
                    "users-people",
                    "chat",
                    "interfaces",
                    "poo"
                ]
            },
            {
                "name": "Podcast",
                "id": "podcast",
                "filter": [
                    "audio-video",
                    "podcast"
                ]
            },
            {
                "name": "Plus Square",
                "id": "plus-square",
                "filter": [
                    "status",
                    "interfaces",
                    "health",
                    "maps",
                    "add",
                    "create",
                    "expand",
                    "new",
                    "plus-square"
                ]
            },
            {
                "name": "Plus Circle",
                "id": "plus-circle",
                "filter": [
                    "status",
                    "interfaces",
                    "add",
                    "create",
                    "expand",
                    "new",
                    "plus-circle"
                ]
            },
            {
                "name": "plus",
                "id": "plus",
                "filter": [
                    "mathematics",
                    "medical",
                    "status",
                    "interfaces",
                    "maps",
                    "add",
                    "create",
                    "expand",
                    "new",
                    "plus"
                ]
            },
            {
                "name": "Plug",
                "id": "plug",
                "filter": [
                    "computers",
                    "objects",
                    "maps",
                    "connect",
                    "online",
                    "power",
                    "plug"
                ]
            },
            {
                "name": "PlayStation",
                "id": "playstation",
                "filter": [
                    "playstation"
                ]
            },
            {
                "name": "Play Circle",
                "id": "play-circle",
                "filter": [
                    "audio-video",
                    "playing",
                    "start",
                    "play-circle"
                ]
            },
            {
                "name": "play",
                "id": "play",
                "filter": [
                    "arrows",
                    "audio-video",
                    "shapes",
                    "music",
                    "playing",
                    "sound",
                    "start",
                    "play"
                ]
            },
            {
                "name": "Plane Departure",
                "id": "plane-departure",
                "filter": [
                    "travel",
                    "airplane",
                    "departing",
                    "destination",
                    "fly",
                    "location",
                    "mode",
                    "take off",
                    "taking off",
                    "travel",
                    "trip",
                    "plane-departure"
                ]
            },
            {
                "name": "Plane Arrival",
                "id": "plane-arrival",
                "filter": [
                    "travel",
                    "airplane",
                    "arriving",
                    "destination",
                    "fly",
                    "land",
                    "landing",
                    "location",
                    "mode",
                    "travel",
                    "trip",
                    "plane-arrival"
                ]
            },
            {
                "name": "plane",
                "id": "plane",
                "filter": [
                    "travel",
                    "vehicles",
                    "objects",
                    "maps",
                    "airplane",
                    "destination",
                    "fly",
                    "location",
                    "mode",
                    "travel",
                    "trip",
                    "plane"
                ]
            },
            {
                "name": "Pinterest Square",
                "id": "pinterest-square",
                "filter": [
                    "pinterest-square"
                ]
            },
            {
                "name": "Pinterest P",
                "id": "pinterest-p",
                "filter": [
                    "pinterest-p"
                ]
            },
            {
                "name": "Pinterest",
                "id": "pinterest",
                "filter": [
                    "pinterest"
                ]
            },
            {
                "name": "Pills",
                "id": "pills",
                "filter": [
                    "medical",
                    "drugs",
                    "medicine",
                    "pills"
                ]
            },
            {
                "name": "Piggy Bank",
                "id": "piggy-bank",
                "filter": [
                    "charity",
                    "save",
                    "savings",
                    "piggy-bank"
                ]
            },
            {
                "name": "Pied Piper PP Logo (Old)",
                "id": "pied-piper-pp",
                "filter": [
                    "pied-piper-pp"
                ]
            },
            {
                "name": "Pied Piper-hat",
                "id": "pied-piper-hat",
                "filter": [
                    "clothing",
                    "pied-piper-hat"
                ]
            },
            {
                "name": "Alternate Pied Piper Logo",
                "id": "pied-piper-alt",
                "filter": [
                    "pied-piper-alt"
                ]
            },
            {
                "name": "Pied Piper Logo",
                "id": "pied-piper",
                "filter": [
                    "pied-piper"
                ]
            },
            {
                "name": "PHP",
                "id": "php",
                "filter": [
                    "php"
                ]
            },
            {
                "name": "Phone Volume",
                "id": "phone-volume",
                "filter": [
                    "audio-video",
                    "communication",
                    "business",
                    "accessibility",
                    "maps",
                    "telephone",
                    "volume-control-phone",
                    "phone-volume"
                ]
            },
            {
                "name": "Phone Square",
                "id": "phone-square",
                "filter": [
                    "communication",
                    "business",
                    "maps",
                    "call",
                    "number",
                    "support",
                    "telephone",
                    "voice",
                    "phone-square"
                ]
            },
            {
                "name": "Phone Slash",
                "id": "phone-slash",
                "filter": [
                    "chat",
                    "communication",
                    "business",
                    "phone-slash"
                ]
            },
            {
                "name": "Phone",
                "id": "phone",
                "filter": [
                    "chat",
                    "communication",
                    "business",
                    "objects",
                    "maps",
                    "call",
                    "earphone",
                    "number",
                    "support",
                    "telephone",
                    "voice",
                    "phone"
                ]
            },
            {
                "name": "Phoenix Squadron",
                "id": "phoenix-squadron",
                "filter": [
                    "phoenix-squadron"
                ]
            },
            {
                "name": "Phoenix Framework",
                "id": "phoenix-framework",
                "filter": [
                    "phoenix-framework"
                ]
            },
            {
                "name": "Phabricator",
                "id": "phabricator",
                "filter": [
                    "phabricator"
                ]
            },
            {
                "name": "Periscope",
                "id": "periscope",
                "filter": [
                    "periscope"
                ]
            },
            {
                "name": "Percentage",
                "id": "percentage",
                "filter": [
                    "mathematics",
                    "percentage"
                ]
            },
            {
                "name": "Percent",
                "id": "percent",
                "filter": [
                    "business",
                    "percent"
                ]
            },
            {
                "name": "People Carry",
                "id": "people-carry",
                "filter": [
                    "moving",
                    "movers",
                    "people-carry"
                ]
            },
            {
                "name": "Pencil Ruler",
                "id": "pencil-ruler",
                "filter": [
                    "design",
                    "pencil-ruler"
                ]
            },
            {
                "name": "Alternate Pencil",
                "id": "pencil-alt",
                "filter": [
                    "design",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "design",
                    "edit",
                    "pencil",
                    "update",
                    "write",
                    "pencil-alt"
                ]
            },
            {
                "name": "Pen Square",
                "id": "pen-square",
                "filter": [
                    "writing",
                    "business",
                    "edit",
                    "pencil-square",
                    "update",
                    "write",
                    "pen-square"
                ]
            },
            {
                "name": "Pen Nib",
                "id": "pen-nib",
                "filter": [
                    "design",
                    "editors",
                    "business",
                    "objects",
                    "design",
                    "edit",
                    "fountain pen",
                    "update",
                    "write",
                    "pen-nib"
                ]
            },
            {
                "name": "Pen Fancy",
                "id": "pen-fancy",
                "filter": [
                    "design",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "design",
                    "edit",
                    "fountain pen",
                    "update",
                    "write",
                    "pen-fancy"
                ]
            },
            {
                "name": "Alternate Pen",
                "id": "pen-alt",
                "filter": [
                    "design",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "design",
                    "edit",
                    "update",
                    "write",
                    "pen-alt"
                ]
            },
            {
                "name": "Pen",
                "id": "pen",
                "filter": [
                    "design",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "design",
                    "edit",
                    "update",
                    "write",
                    "pen"
                ]
            },
            {
                "name": "Paypal",
                "id": "paypal",
                "filter": [
                    "payments-shopping",
                    "paypal"
                ]
            },
            {
                "name": "Paw",
                "id": "paw",
                "filter": [
                    "objects",
                    "maps",
                    "pet",
                    "paw"
                ]
            },
            {
                "name": "Pause Circle",
                "id": "pause-circle",
                "filter": [
                    "audio-video",
                    "pause-circle"
                ]
            },
            {
                "name": "pause",
                "id": "pause",
                "filter": [
                    "audio-video",
                    "wait",
                    "pause"
                ]
            },
            {
                "name": "Patreon",
                "id": "patreon",
                "filter": [
                    "patreon"
                ]
            },
            {
                "name": "Paste",
                "id": "paste",
                "filter": [
                    "files",
                    "design",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "clipboard",
                    "copy",
                    "paste"
                ]
            },
            {
                "name": "Passport",
                "id": "passport",
                "filter": [
                    "travel",
                    "document",
                    "identification",
                    "issued",
                    "passport"
                ]
            },
            {
                "name": "Parking",
                "id": "parking",
                "filter": [
                    "parking"
                ]
            },
            {
                "name": "paragraph",
                "id": "paragraph",
                "filter": [
                    "writing",
                    "editors",
                    "paragraph"
                ]
            },
            {
                "name": "Parachute Box",
                "id": "parachute-box",
                "filter": [
                    "charity",
                    "aid",
                    "assistance",
                    "rescue",
                    "supplies",
                    "parachute-box"
                ]
            },
            {
                "name": "Paperclip",
                "id": "paperclip",
                "filter": [
                    "writing",
                    "editors",
                    "business",
                    "objects",
                    "attachment",
                    "paperclip"
                ]
            },
            {
                "name": "Paper Plane",
                "id": "paper-plane",
                "filter": [
                    "vehicles",
                    "writing",
                    "communication",
                    "editors",
                    "objects",
                    "paper-plane"
                ]
            },
            {
                "name": "Pallet",
                "id": "pallet",
                "filter": [
                    "logistics",
                    "pallet"
                ]
            },
            {
                "name": "Palfed",
                "id": "palfed",
                "filter": [
                    "palfed"
                ]
            },
            {
                "name": "Palette",
                "id": "palette",
                "filter": [
                    "design",
                    "colors",
                    "painting",
                    "palette"
                ]
            },
            {
                "name": "Paint Roller",
                "id": "paint-roller",
                "filter": [
                    "design",
                    "brush",
                    "painting",
                    "tool",
                    "paint-roller"
                ]
            },
            {
                "name": "Paint Brush",
                "id": "paint-brush",
                "filter": [
                    "design",
                    "objects",
                    "paint-brush"
                ]
            },
            {
                "name": "Pagelines",
                "id": "pagelines",
                "filter": [
                    "eco",
                    "leaf",
                    "leaves",
                    "nature",
                    "plant",
                    "tree",
                    "pagelines"
                ]
            },
            {
                "name": "page4 Corporation",
                "id": "page4",
                "filter": [
                    "page4"
                ]
            },
            {
                "name": "Outdent",
                "id": "outdent",
                "filter": [
                    "editors",
                    "outdent"
                ]
            },
            {
                "name": "Open Source Initiative",
                "id": "osi",
                "filter": [
                    "osi"
                ]
            },
            {
                "name": "Optin Monster",
                "id": "optin-monster",
                "filter": [
                    "optin-monster"
                ]
            },
            {
                "name": "Opera",
                "id": "opera",
                "filter": [
                    "opera"
                ]
            },
            {
                "name": "OpenID",
                "id": "openid",
                "filter": [
                    "openid"
                ]
            },
            {
                "name": "OpenCart",
                "id": "opencart",
                "filter": [
                    "opencart"
                ]
            },
            {
                "name": "Old Republic",
                "id": "old-republic",
                "filter": [
                    "old-republic"
                ]
            },
            {
                "name": "Odnoklassniki Square",
                "id": "odnoklassniki-square",
                "filter": [
                    "odnoklassniki-square"
                ]
            },
            {
                "name": "Odnoklassniki",
                "id": "odnoklassniki",
                "filter": [
                    "odnoklassniki"
                ]
            },
            {
                "name": "Object Ungroup",
                "id": "object-ungroup",
                "filter": [
                    "design",
                    "design",
                    "object-ungroup"
                ]
            },
            {
                "name": "Object Group",
                "id": "object-group",
                "filter": [
                    "design",
                    "design",
                    "object-group"
                ]
            },
            {
                "name": "Nutritionix",
                "id": "nutritionix",
                "filter": [
                    "nutritionix"
                ]
            },
            {
                "name": "NS8",
                "id": "ns8",
                "filter": [
                    "ns8"
                ]
            },
            {
                "name": "npm",
                "id": "npm",
                "filter": [
                    "npm"
                ]
            },
            {
                "name": "Medical Notes",
                "id": "notes-medical",
                "filter": [
                    "medical",
                    "notes-medical"
                ]
            },
            {
                "name": "Not Equal",
                "id": "not-equal",
                "filter": [
                    "mathematics",
                    "not-equal"
                ]
            },
            {
                "name": "Node.js JS",
                "id": "node-js",
                "filter": [
                    "node-js"
                ]
            },
            {
                "name": "Node.js",
                "id": "node",
                "filter": [
                    "node"
                ]
            },
            {
                "name": "Nintendo Switch",
                "id": "nintendo-switch",
                "filter": [
                    "nintendo-switch"
                ]
            },
            {
                "name": "Nimblr",
                "id": "nimblr",
                "filter": [
                    "nimblr"
                ]
            },
            {
                "name": "Newspaper",
                "id": "newspaper",
                "filter": [
                    "writing",
                    "objects",
                    "maps",
                    "article",
                    "press",
                    "newspaper"
                ]
            },
            {
                "name": "Neuter",
                "id": "neuter",
                "filter": [
                    "gender",
                    "neuter"
                ]
            },
            {
                "name": "Napster",
                "id": "napster",
                "filter": [
                    "napster"
                ]
            },
            {
                "name": "Music",
                "id": "music",
                "filter": [
                    "audio-video",
                    "maps",
                    "note",
                    "sound",
                    "music"
                ]
            },
            {
                "name": "Mouse Pointer",
                "id": "mouse-pointer",
                "filter": [
                    "arrows",
                    "select",
                    "mouse-pointer"
                ]
            },
            {
                "name": "Motorcycle",
                "id": "motorcycle",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "bike",
                    "machine",
                    "transportation",
                    "vehicle",
                    "motorcycle"
                ]
            },
            {
                "name": "Mortar Pestle",
                "id": "mortar-pestle",
                "filter": [
                    "crush",
                    "culinary",
                    "grind",
                    "medical",
                    "mix",
                    "spices",
                    "mortar-pestle"
                ]
            },
            {
                "name": "Moon",
                "id": "moon",
                "filter": [
                    "objects",
                    "contrast",
                    "darker",
                    "night",
                    "moon"
                ]
            },
            {
                "name": "Monument",
                "id": "monument",
                "filter": [
                    "travel",
                    "building",
                    "historic",
                    "memoroable",
                    "monument"
                ]
            },
            {
                "name": "Alternate Money Check",
                "id": "money-check-alt",
                "filter": [
                    "currency",
                    "payments-shopping",
                    "objects",
                    "bank check",
                    "cheque",
                    "money-check-alt"
                ]
            },
            {
                "name": "Money Check",
                "id": "money-check",
                "filter": [
                    "currency",
                    "payments-shopping",
                    "objects",
                    "bank check",
                    "cheque",
                    "money-check"
                ]
            },
            {
                "name": "Alternate Wavy Money Bill",
                "id": "money-bill-wave-alt",
                "filter": [
                    "currency",
                    "money-bill-wave-alt"
                ]
            },
            {
                "name": "Wavy Money Bill",
                "id": "money-bill-wave",
                "filter": [
                    "currency",
                    "money-bill-wave"
                ]
            },
            {
                "name": "Alternate Money Bill",
                "id": "money-bill-alt",
                "filter": [
                    "currency",
                    "objects",
                    "maps",
                    "buy",
                    "cash",
                    "checkout",
                    "money",
                    "payment",
                    "price",
                    "purchase",
                    "money-bill-alt"
                ]
            },
            {
                "name": "Money Bill",
                "id": "money-bill",
                "filter": [
                    "currency",
                    "objects",
                    "objects",
                    "maps",
                    "buy",
                    "cash",
                    "checkout",
                    "money",
                    "payment",
                    "price",
                    "purchase",
                    "money-bill"
                ]
            },
            {
                "name": "Monero",
                "id": "monero",
                "filter": [
                    "monero"
                ]
            },
            {
                "name": "MODX",
                "id": "modx",
                "filter": [
                    "modx"
                ]
            },
            {
                "name": "Alternate Mobile",
                "id": "mobile-alt",
                "filter": [
                    "computers",
                    "communication",
                    "objects",
                    "apple",
                    "call",
                    "cell phone",
                    "cellphone",
                    "device",
                    "iphone",
                    "number",
                    "screen",
                    "telephone",
                    "text",
                    "mobile-alt"
                ]
            },
            {
                "name": "Mobile Phone",
                "id": "mobile",
                "filter": [
                    "computers",
                    "communication",
                    "objects",
                    "apple",
                    "call",
                    "cell phone",
                    "cellphone",
                    "device",
                    "iphone",
                    "number",
                    "screen",
                    "telephone",
                    "text",
                    "mobile"
                ]
            },
            {
                "name": "Mizuni",
                "id": "mizuni",
                "filter": [
                    "mizuni"
                ]
            },
            {
                "name": "Mixcloud",
                "id": "mixcloud",
                "filter": [
                    "mixcloud"
                ]
            },
            {
                "name": "Mix",
                "id": "mix",
                "filter": [
                    "mix"
                ]
            },
            {
                "name": "Minus Square",
                "id": "minus-square",
                "filter": [
                    "status",
                    "interfaces",
                    "collapse",
                    "delete",
                    "hide",
                    "hide",
                    "minify",
                    "remove",
                    "trash",
                    "minus-square"
                ]
            },
            {
                "name": "Minus Circle",
                "id": "minus-circle",
                "filter": [
                    "status",
                    "interfaces",
                    "delete",
                    "hide",
                    "remove",
                    "trash",
                    "minus-circle"
                ]
            },
            {
                "name": "minus",
                "id": "minus",
                "filter": [
                    "mathematics",
                    "status",
                    "interfaces",
                    "collapse",
                    "delete",
                    "hide",
                    "hide",
                    "minify",
                    "remove",
                    "trash",
                    "minus"
                ]
            },
            {
                "name": "Microsoft",
                "id": "microsoft",
                "filter": [
                    "microsoft"
                ]
            },
            {
                "name": "Microphone Slash",
                "id": "microphone-slash",
                "filter": [
                    "audio-video",
                    "interfaces",
                    "communication",
                    "disable",
                    "mute",
                    "record",
                    "sound",
                    "voice",
                    "microphone-slash"
                ]
            },
            {
                "name": "Alternate Microphone Slash",
                "id": "microphone-alt-slash",
                "filter": [
                    "audio-video",
                    "communication",
                    "disable",
                    "mute",
                    "record",
                    "sound",
                    "voice",
                    "microphone-alt-slash"
                ]
            },
            {
                "name": "Alternate Microphone",
                "id": "microphone-alt",
                "filter": [
                    "audio-video",
                    "interfaces",
                    "communication",
                    "objects",
                    "record",
                    "sound",
                    "voice",
                    "microphone-alt"
                ]
            },
            {
                "name": "microphone",
                "id": "microphone",
                "filter": [
                    "audio-video",
                    "interfaces",
                    "communication",
                    "objects",
                    "record",
                    "sound",
                    "voice",
                    "microphone"
                ]
            },
            {
                "name": "Microchip",
                "id": "microchip",
                "filter": [
                    "computers",
                    "objects",
                    "code",
                    "cpu",
                    "processor",
                    "microchip"
                ]
            },
            {
                "name": "Mercury",
                "id": "mercury",
                "filter": [
                    "gender",
                    "transgender",
                    "mercury"
                ]
            },
            {
                "name": "Memory",
                "id": "memory",
                "filter": [
                    "computers",
                    "objects",
                    "DIMM",
                    "RAM",
                    "memory"
                ]
            },
            {
                "name": "Face With Rolling Eyes",
                "id": "meh-rolling-eyes",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "neutral",
                    "rating",
                    "meh-rolling-eyes"
                ]
            },
            {
                "name": "Face Without Mouth",
                "id": "meh-blank",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "neutral",
                    "rating",
                    "meh-blank"
                ]
            },
            {
                "name": "Neutral Face",
                "id": "meh",
                "filter": [
                    "users-people",
                    "chat",
                    "interfaces",
                    "emoji",
                    "emoticon",
                    "face",
                    "neutral",
                    "rating",
                    "meh"
                ]
            },
            {
                "name": "Megaport",
                "id": "megaport",
                "filter": [
                    "megaport"
                ]
            },
            {
                "name": "Meetup",
                "id": "meetup",
                "filter": [
                    "meetup"
                ]
            },
            {
                "name": "MRT",
                "id": "medrt",
                "filter": [
                    "medrt"
                ]
            },
            {
                "name": "medkit",
                "id": "medkit",
                "filter": [
                    "health",
                    "objects",
                    "maps",
                    "first aid",
                    "firstaid",
                    "health",
                    "help",
                    "support",
                    "medkit"
                ]
            },
            {
                "name": "Medium M",
                "id": "medium-m",
                "filter": [
                    "medium-m"
                ]
            },
            {
                "name": "Medium",
                "id": "medium",
                "filter": [
                    "medium"
                ]
            },
            {
                "name": "MedApps",
                "id": "medapps",
                "filter": [
                    "medapps"
                ]
            },
            {
                "name": "Medal",
                "id": "medal",
                "filter": [
                    "interfaces",
                    "objects",
                    "medal"
                ]
            },
            {
                "name": "MaxCDN",
                "id": "maxcdn",
                "filter": [
                    "maxcdn"
                ]
            },
            {
                "name": "Mastodon",
                "id": "mastodon",
                "filter": [
                    "mastodon"
                ]
            },
            {
                "name": "Mars Stroke Vertical",
                "id": "mars-stroke-v",
                "filter": [
                    "gender",
                    "mars-stroke-v"
                ]
            },
            {
                "name": "Mars Stroke Horizontal",
                "id": "mars-stroke-h",
                "filter": [
                    "gender",
                    "mars-stroke-h"
                ]
            },
            {
                "name": "Mars Stroke",
                "id": "mars-stroke",
                "filter": [
                    "gender",
                    "mars-stroke"
                ]
            },
            {
                "name": "Mars Double",
                "id": "mars-double",
                "filter": [
                    "gender",
                    "mars-double"
                ]
            },
            {
                "name": "Mars",
                "id": "mars",
                "filter": [
                    "gender",
                    "male",
                    "mars"
                ]
            },
            {
                "name": "Marker",
                "id": "marker",
                "filter": [
                    "design",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "edit",
                    "sharpie",
                    "update",
                    "write",
                    "marker"
                ]
            },
            {
                "name": "Map Signs",
                "id": "map-signs",
                "filter": [
                    "objects",
                    "maps",
                    "map-signs"
                ]
            },
            {
                "name": "Map Pin",
                "id": "map-pin",
                "filter": [
                    "objects",
                    "maps",
                    "address",
                    "coordinates",
                    "gps",
                    "localize",
                    "location",
                    "map",
                    "marker",
                    "place",
                    "position",
                    "travel",
                    "where",
                    "map-pin"
                ]
            },
            {
                "name": "Alternate Map Marker",
                "id": "map-marker-alt",
                "filter": [
                    "objects",
                    "maps",
                    "address",
                    "coordinates",
                    "gps",
                    "localize",
                    "location",
                    "map",
                    "pin",
                    "place",
                    "position",
                    "travel",
                    "where",
                    "map-marker-alt"
                ]
            },
            {
                "name": "map-marker",
                "id": "map-marker",
                "filter": [
                    "shapes",
                    "objects",
                    "maps",
                    "address",
                    "coordinates",
                    "gps",
                    "localize",
                    "location",
                    "map",
                    "pin",
                    "place",
                    "position",
                    "travel",
                    "where",
                    "map-marker"
                ]
            },
            {
                "name": "Map Marked-alt",
                "id": "map-marked-alt",
                "filter": [
                    "travel",
                    "address",
                    "coordinates",
                    "destination",
                    "gps",
                    "localize",
                    "location",
                    "map",
                    "paper",
                    "pin",
                    "place",
                    "point of interest",
                    "position",
                    "route",
                    "travel",
                    "where",
                    "map-marked-alt"
                ]
            },
            {
                "name": "Map Marked",
                "id": "map-marked",
                "filter": [
                    "travel",
                    "address",
                    "coordinates",
                    "destination",
                    "gps",
                    "localize",
                    "location",
                    "map",
                    "paper",
                    "pin",
                    "place",
                    "point of interest",
                    "position",
                    "route",
                    "travel",
                    "where",
                    "map-marked"
                ]
            },
            {
                "name": "Map",
                "id": "map",
                "filter": [
                    "travel",
                    "objects",
                    "maps",
                    "coordinates",
                    "location",
                    "paper",
                    "place",
                    "travel",
                    "map"
                ]
            },
            {
                "name": "Mandalorian",
                "id": "mandalorian",
                "filter": [
                    "mandalorian"
                ]
            },
            {
                "name": "Male",
                "id": "male",
                "filter": [
                    "users-people",
                    "maps",
                    "human",
                    "man",
                    "person",
                    "profile",
                    "user",
                    "male"
                ]
            },
            {
                "name": "Mailchimp",
                "id": "mailchimp",
                "filter": [
                    "mailchimp"
                ]
            },
            {
                "name": "magnet",
                "id": "magnet",
                "filter": [
                    "objects",
                    "maps",
                    "magnet"
                ]
            },
            {
                "name": "magic",
                "id": "magic",
                "filter": [
                    "design",
                    "interfaces",
                    "objects",
                    "autocomplete",
                    "automatic",
                    "wizard",
                    "magic"
                ]
            },
            {
                "name": "Magento",
                "id": "magento",
                "filter": [
                    "magento"
                ]
            },
            {
                "name": "lyft",
                "id": "lyft",
                "filter": [
                    "lyft"
                ]
            },
            {
                "name": "Luggage Cart",
                "id": "luggage-cart",
                "filter": [
                    "travel",
                    "luggage-cart"
                ]
            },
            {
                "name": "Low Vision",
                "id": "low-vision",
                "filter": [
                    "accessibility",
                    "maps",
                    "low-vision"
                ]
            },
            {
                "name": "Alternate Long Arrow Up",
                "id": "long-arrow-alt-up",
                "filter": [
                    "arrows",
                    "long-arrow-up",
                    "long-arrow-alt-up"
                ]
            },
            {
                "name": "Alternate Long Arrow Right",
                "id": "long-arrow-alt-right",
                "filter": [
                    "arrows",
                    "long-arrow-right",
                    "long-arrow-alt-right"
                ]
            },
            {
                "name": "Alternate Long Arrow Left",
                "id": "long-arrow-alt-left",
                "filter": [
                    "arrows",
                    "back",
                    "long-arrow-left",
                    "previous",
                    "long-arrow-alt-left"
                ]
            },
            {
                "name": "Alternate Long Arrow Down",
                "id": "long-arrow-alt-down",
                "filter": [
                    "arrows",
                    "long-arrow-down",
                    "long-arrow-alt-down"
                ]
            },
            {
                "name": "Lock Open",
                "id": "lock-open",
                "filter": [
                    "status",
                    "objects",
                    "admin",
                    "lock",
                    "open",
                    "password",
                    "protect",
                    "lock-open"
                ]
            },
            {
                "name": "lock",
                "id": "lock",
                "filter": [
                    "status",
                    "objects",
                    "admin",
                    "protect",
                    "security",
                    "lock"
                ]
            },
            {
                "name": "location-arrow",
                "id": "location-arrow",
                "filter": [
                    "arrows",
                    "maps",
                    "address",
                    "coordinates",
                    "gps",
                    "location",
                    "map",
                    "place",
                    "where",
                    "location-arrow"
                ]
            },
            {
                "name": "list-ul",
                "id": "list-ul",
                "filter": [
                    "editors",
                    "checklist",
                    "list",
                    "ol",
                    "todo",
                    "ul",
                    "list-ul"
                ]
            },
            {
                "name": "list-ol",
                "id": "list-ol",
                "filter": [
                    "editors",
                    "checklist",
                    "list",
                    "list",
                    "numbers",
                    "ol",
                    "todo",
                    "ul",
                    "list-ol"
                ]
            },
            {
                "name": "Alternate List",
                "id": "list-alt",
                "filter": [
                    "editors",
                    "checklist",
                    "completed",
                    "done",
                    "finished",
                    "ol",
                    "todo",
                    "ul",
                    "list-alt"
                ]
            },
            {
                "name": "List",
                "id": "list",
                "filter": [
                    "editors",
                    "checklist",
                    "completed",
                    "done",
                    "finished",
                    "ol",
                    "todo",
                    "ul",
                    "list"
                ]
            },
            {
                "name": "Turkish Lira Sign",
                "id": "lira-sign",
                "filter": [
                    "currency",
                    "try",
                    "try",
                    "turkish",
                    "lira-sign"
                ]
            },
            {
                "name": "Linux",
                "id": "linux",
                "filter": [
                    "tux",
                    "linux"
                ]
            },
            {
                "name": "Linode",
                "id": "linode",
                "filter": [
                    "linode"
                ]
            },
            {
                "name": "LinkedIn In",
                "id": "linkedin-in",
                "filter": [
                    "linkedin",
                    "linkedin-in"
                ]
            },
            {
                "name": "LinkedIn",
                "id": "linkedin",
                "filter": [
                    "linkedin-square",
                    "linkedin"
                ]
            },
            {
                "name": "Link",
                "id": "link",
                "filter": [
                    "editors",
                    "chain",
                    "link"
                ]
            },
            {
                "name": "Line",
                "id": "line",
                "filter": [
                    "line"
                ]
            },
            {
                "name": "Lightbulb",
                "id": "lightbulb",
                "filter": [
                    "objects",
                    "maps",
                    "idea",
                    "inspiration",
                    "lightbulb"
                ]
            },
            {
                "name": "Life Ring",
                "id": "life-ring",
                "filter": [
                    "spinners",
                    "objects",
                    "maps",
                    "support",
                    "life-ring"
                ]
            },
            {
                "name": "Alternate Level Up",
                "id": "level-up-alt",
                "filter": [
                    "arrows",
                    "level-up",
                    "level-up-alt"
                ]
            },
            {
                "name": "Alternate Level Down",
                "id": "level-down-alt",
                "filter": [
                    "arrows",
                    "level-down",
                    "level-down-alt"
                ]
            },
            {
                "name": "Less Than Equal To",
                "id": "less-than-equal",
                "filter": [
                    "mathematics",
                    "less-than-equal"
                ]
            },
            {
                "name": "Less Than",
                "id": "less-than",
                "filter": [
                    "mathematics",
                    "less-than"
                ]
            },
            {
                "name": "Less",
                "id": "less",
                "filter": [
                    "less"
                ]
            },
            {
                "name": "Lemon",
                "id": "lemon",
                "filter": [
                    "objects",
                    "maps",
                    "food",
                    "lemon"
                ]
            },
            {
                "name": "Leanpub",
                "id": "leanpub",
                "filter": [
                    "leanpub"
                ]
            },
            {
                "name": "leaf",
                "id": "leaf",
                "filter": [
                    "charity",
                    "objects",
                    "maps",
                    "eco",
                    "nature",
                    "plant",
                    "leaf"
                ]
            },
            {
                "name": "Laughing Winking Face",
                "id": "laugh-wink",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "laugh-wink"
                ]
            },
            {
                "name": "Laughing Squinting Face",
                "id": "laugh-squint",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "laugh-squint"
                ]
            },
            {
                "name": "Laugh Face with Beaming Eyes",
                "id": "laugh-beam",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "laugh-beam"
                ]
            },
            {
                "name": "Grinning Face With Big Eyes",
                "id": "laugh",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "laugh",
                    "laugh"
                ]
            },
            {
                "name": "last.fm Square",
                "id": "lastfm-square",
                "filter": [
                    "lastfm-square"
                ]
            },
            {
                "name": "last.fm",
                "id": "lastfm",
                "filter": [
                    "lastfm"
                ]
            },
            {
                "name": "Laravel",
                "id": "laravel",
                "filter": [
                    "laravel"
                ]
            },
            {
                "name": "Laptop",
                "id": "laptop",
                "filter": [
                    "computers",
                    "objects",
                    "computer",
                    "cpu",
                    "dell",
                    "demo",
                    "device",
                    "dude you're getting",
                    "mac",
                    "macbook",
                    "machine",
                    "pc",
                    "pc",
                    "laptop"
                ]
            },
            {
                "name": "Language",
                "id": "language",
                "filter": [
                    "interfaces",
                    "communication",
                    "dialect",
                    "idiom",
                    "localize",
                    "speech",
                    "translate",
                    "vernacular",
                    "language"
                ]
            },
            {
                "name": "KORVUE",
                "id": "korvue",
                "filter": [
                    "korvue"
                ]
            },
            {
                "name": "Kiwi Bird",
                "id": "kiwi-bird",
                "filter": [
                    "animals",
                    "kiwi-bird"
                ]
            },
            {
                "name": "Face Blowing a Kiss",
                "id": "kiss-wink-heart",
                "filter": [
                    "emoji",
                    "beso",
                    "emoticon",
                    "face",
                    "love",
                    "smooch",
                    "kiss-wink-heart"
                ]
            },
            {
                "name": "Kissing Face With Smiling Eyes",
                "id": "kiss-beam",
                "filter": [
                    "emoji",
                    "beso",
                    "emoticon",
                    "face",
                    "love",
                    "smooch",
                    "kiss-beam"
                ]
            },
            {
                "name": "Kissing Face",
                "id": "kiss",
                "filter": [
                    "emoji",
                    "beso",
                    "emoticon",
                    "face",
                    "love",
                    "smooch",
                    "kiss"
                ]
            },
            {
                "name": "Kickstarter K",
                "id": "kickstarter-k",
                "filter": [
                    "kickstarter-k"
                ]
            },
            {
                "name": "Kickstarter",
                "id": "kickstarter",
                "filter": [
                    "kickstarter"
                ]
            },
            {
                "name": "KeyCDN",
                "id": "keycdn",
                "filter": [
                    "keycdn"
                ]
            },
            {
                "name": "Keyboard",
                "id": "keyboard",
                "filter": [
                    "computers",
                    "writing",
                    "objects",
                    "code",
                    "input",
                    "type",
                    "keyboard"
                ]
            },
            {
                "name": "Keybase",
                "id": "keybase",
                "filter": [
                    "keybase"
                ]
            },
            {
                "name": "key",
                "id": "key",
                "filter": [
                    "payments-shopping",
                    "objects",
                    "maps",
                    "password",
                    "unlock",
                    "key"
                ]
            },
            {
                "name": "jsFiddle",
                "id": "jsfiddle",
                "filter": [
                    "jsfiddle"
                ]
            },
            {
                "name": "JavaScript (JS) Square",
                "id": "js-square",
                "filter": [
                    "js-square"
                ]
            },
            {
                "name": "JavaScript (JS)",
                "id": "js",
                "filter": [
                    "js"
                ]
            },
            {
                "name": "Joomla Logo",
                "id": "joomla",
                "filter": [
                    "joomla"
                ]
            },
            {
                "name": "Joint",
                "id": "joint",
                "filter": [
                    "blunt",
                    "cannabis",
                    "doobie",
                    "drugs",
                    "marijuana",
                    "roach",
                    "smoke",
                    "smoking",
                    "spliff",
                    "joint"
                ]
            },
            {
                "name": "Joget",
                "id": "joget",
                "filter": [
                    "joget"
                ]
            },
            {
                "name": "Jenkis",
                "id": "jenkins",
                "filter": [
                    "jenkins"
                ]
            },
            {
                "name": "Jedi Order",
                "id": "jedi-order",
                "filter": [
                    "jedi-order"
                ]
            },
            {
                "name": "Java",
                "id": "java",
                "filter": [
                    "java"
                ]
            },
            {
                "name": "Itunes Note",
                "id": "itunes-note",
                "filter": [
                    "itunes-note"
                ]
            },
            {
                "name": "iTunes",
                "id": "itunes",
                "filter": [
                    "itunes"
                ]
            },
            {
                "name": "italic",
                "id": "italic",
                "filter": [
                    "editors",
                    "italics",
                    "italic"
                ]
            },
            {
                "name": "ioxhost",
                "id": "ioxhost",
                "filter": [
                    "ioxhost"
                ]
            },
            {
                "name": "Internet-explorer",
                "id": "internet-explorer",
                "filter": [
                    "browser",
                    "ie",
                    "internet-explorer"
                ]
            },
            {
                "name": "Instagram",
                "id": "instagram",
                "filter": [
                    "instagram"
                ]
            },
            {
                "name": "Info Circle",
                "id": "info-circle",
                "filter": [
                    "status",
                    "interfaces",
                    "maps",
                    "details",
                    "help",
                    "information",
                    "more",
                    "info-circle"
                ]
            },
            {
                "name": "Info",
                "id": "info",
                "filter": [
                    "status",
                    "interfaces",
                    "maps",
                    "details",
                    "help",
                    "information",
                    "more",
                    "info"
                ]
            },
            {
                "name": "Infinity",
                "id": "infinity",
                "filter": [
                    "infinity"
                ]
            },
            {
                "name": "Industry",
                "id": "industry",
                "filter": [
                    "buildings",
                    "business",
                    "objects",
                    "maps",
                    "factory",
                    "manufacturing",
                    "industry"
                ]
            },
            {
                "name": "Indent",
                "id": "indent",
                "filter": [
                    "editors",
                    "indent"
                ]
            },
            {
                "name": "inbox",
                "id": "inbox",
                "filter": [
                    "communication",
                    "inbox"
                ]
            },
            {
                "name": "IMDB",
                "id": "imdb",
                "filter": [
                    "imdb"
                ]
            },
            {
                "name": "Images",
                "id": "images",
                "filter": [
                    "images",
                    "objects",
                    "maps",
                    "album",
                    "photo",
                    "picture",
                    "images"
                ]
            },
            {
                "name": "Image",
                "id": "image",
                "filter": [
                    "images",
                    "objects",
                    "maps",
                    "album",
                    "photo",
                    "picture",
                    "picture",
                    "image"
                ]
            },
            {
                "name": "Alternate Identification Card",
                "id": "id-card-alt",
                "filter": [
                    "users-people",
                    "medical",
                    "demographics",
                    "id-card-alt"
                ]
            },
            {
                "name": "Identification Card",
                "id": "id-card",
                "filter": [
                    "users-people",
                    "images",
                    "document",
                    "identification",
                    "issued",
                    "id-card"
                ]
            },
            {
                "name": "Identification Badge",
                "id": "id-badge",
                "filter": [
                    "users-people",
                    "images",
                    "id-badge"
                ]
            },
            {
                "name": "I Beam Cursor",
                "id": "i-cursor",
                "filter": [
                    "interfaces",
                    "editors",
                    "i-cursor"
                ]
            },
            {
                "name": "HubSpot",
                "id": "hubspot",
                "filter": [
                    "hubspot"
                ]
            },
            {
                "name": "HTML 5 Logo",
                "id": "html5",
                "filter": [
                    "html5"
                ]
            },
            {
                "name": "Houzz",
                "id": "houzz",
                "filter": [
                    "houzz"
                ]
            },
            {
                "name": "Hourglass Start",
                "id": "hourglass-start",
                "filter": [
                    "date-time",
                    "hourglass-start"
                ]
            },
            {
                "name": "Hourglass Half",
                "id": "hourglass-half",
                "filter": [
                    "date-time",
                    "hourglass-half"
                ]
            },
            {
                "name": "Hourglass End",
                "id": "hourglass-end",
                "filter": [
                    "date-time",
                    "hourglass-end"
                ]
            },
            {
                "name": "Hourglass",
                "id": "hourglass",
                "filter": [
                    "date-time",
                    "objects",
                    "hourglass"
                ]
            },
            {
                "name": "Hotjar",
                "id": "hotjar",
                "filter": [
                    "hotjar"
                ]
            },
            {
                "name": "Hotel",
                "id": "hotel",
                "filter": [
                    "travel",
                    "building",
                    "lodging",
                    "hotel"
                ]
            },
            {
                "name": "Hot Tub",
                "id": "hot-tub",
                "filter": [
                    "travel",
                    "hot-tub"
                ]
            },
            {
                "name": "Hospital Symbol",
                "id": "hospital-symbol",
                "filter": [
                    "medical",
                    "hospital-symbol"
                ]
            },
            {
                "name": "Alternate Hospital",
                "id": "hospital-alt",
                "filter": [
                    "buildings",
                    "medical",
                    "building",
                    "emergency room",
                    "medical center",
                    "hospital-alt"
                ]
            },
            {
                "name": "hospital",
                "id": "hospital",
                "filter": [
                    "buildings",
                    "medical",
                    "health",
                    "objects",
                    "maps",
                    "building",
                    "emergency room",
                    "medical center",
                    "hospital"
                ]
            },
            {
                "name": "Hornbill",
                "id": "hornbill",
                "filter": [
                    "hornbill"
                ]
            },
            {
                "name": "Hooli",
                "id": "hooli",
                "filter": [
                    "hooli"
                ]
            },
            {
                "name": "home",
                "id": "home",
                "filter": [
                    "buildings",
                    "interfaces",
                    "objects",
                    "maps",
                    "house",
                    "main",
                    "home"
                ]
            },
            {
                "name": "Hockey Puck",
                "id": "hockey-puck",
                "filter": [
                    "sports",
                    "hockey-puck"
                ]
            },
            {
                "name": "History",
                "id": "history",
                "filter": [
                    "arrows",
                    "interfaces",
                    "history"
                ]
            },
            {
                "name": "HireAHelper",
                "id": "hire-a-helper",
                "filter": [
                    "hire-a-helper"
                ]
            },
            {
                "name": "Hips",
                "id": "hips",
                "filter": [
                    "hips"
                ]
            },
            {
                "name": "Highlighter",
                "id": "highlighter",
                "filter": [
                    "design",
                    "editors",
                    "business",
                    "objects",
                    "edit",
                    "marker",
                    "sharpie",
                    "update",
                    "write",
                    "highlighter"
                ]
            },
            {
                "name": "Helicopter",
                "id": "helicopter",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "airwolf",
                    "apache",
                    "chopper",
                    "flight",
                    "fly",
                    "helicopter"
                ]
            },
            {
                "name": "Heartbeat",
                "id": "heartbeat",
                "filter": [
                    "medical",
                    "health",
                    "maps",
                    "ekg",
                    "lifeline",
                    "vital signs",
                    "heartbeat"
                ]
            },
            {
                "name": "Heart",
                "id": "heart",
                "filter": [
                    "medical",
                    "charity",
                    "shapes",
                    "interfaces",
                    "payments-shopping",
                    "health",
                    "objects",
                    "maps",
                    "favorite",
                    "like",
                    "love",
                    "heart"
                ]
            },
            {
                "name": "Headset",
                "id": "headset",
                "filter": [
                    "objects",
                    "audio",
                    "gamer",
                    "gaming",
                    "listen",
                    "live chat",
                    "microphone",
                    "shot caller",
                    "sound",
                    "support",
                    "telemarketer",
                    "headset"
                ]
            },
            {
                "name": "Headphones Alt",
                "id": "headphones-alt",
                "filter": [
                    "objects",
                    "audio",
                    "listen",
                    "music",
                    "sound",
                    "speaker",
                    "headphones-alt"
                ]
            },
            {
                "name": "headphones",
                "id": "headphones",
                "filter": [
                    "computers",
                    "audio-video",
                    "objects",
                    "objects",
                    "audio",
                    "listen",
                    "music",
                    "sound",
                    "speaker",
                    "headphones"
                ]
            },
            {
                "name": "heading",
                "id": "heading",
                "filter": [
                    "editors",
                    "header",
                    "header",
                    "heading"
                ]
            },
            {
                "name": "HDD",
                "id": "hdd",
                "filter": [
                    "computers",
                    "objects",
                    "cpu",
                    "hard drive",
                    "harddrive",
                    "machine",
                    "save",
                    "storage",
                    "hdd"
                ]
            },
            {
                "name": "Hashtag",
                "id": "hashtag",
                "filter": [
                    "interfaces",
                    "hashtag"
                ]
            },
            {
                "name": "Handshake",
                "id": "handshake",
                "filter": [
                    "charity",
                    "hands",
                    "payments-shopping",
                    "greeting",
                    "partnership",
                    "handshake"
                ]
            },
            {
                "name": "Helping Hands",
                "id": "hands-helping",
                "filter": [
                    "charity",
                    "aid",
                    "assistance",
                    "partnership",
                    "volunteering",
                    "hands-helping"
                ]
            },
            {
                "name": "Hands",
                "id": "hands",
                "filter": [
                    "hands",
                    "hands"
                ]
            },
            {
                "name": "Spock (Hand)",
                "id": "hand-spock",
                "filter": [
                    "hands",
                    "hand-spock"
                ]
            },
            {
                "name": "Scissors (Hand)",
                "id": "hand-scissors",
                "filter": [
                    "hands",
                    "hand-scissors"
                ]
            },
            {
                "name": "Rock (Hand)",
                "id": "hand-rock",
                "filter": [
                    "hands",
                    "hand-rock"
                ]
            },
            {
                "name": "Pointer (Hand)",
                "id": "hand-pointer",
                "filter": [
                    "arrows",
                    "hands",
                    "select",
                    "hand-pointer"
                ]
            },
            {
                "name": "Hand Pointing Up",
                "id": "hand-point-up",
                "filter": [
                    "arrows",
                    "hands",
                    "finger",
                    "hand-o-up",
                    "point",
                    "hand-point-up"
                ]
            },
            {
                "name": "Hand Pointing Right",
                "id": "hand-point-right",
                "filter": [
                    "arrows",
                    "hands",
                    "finger",
                    "forward",
                    "hand-o-right",
                    "next",
                    "point",
                    "right",
                    "hand-point-right"
                ]
            },
            {
                "name": "Hand Pointing Left",
                "id": "hand-point-left",
                "filter": [
                    "arrows",
                    "hands",
                    "back",
                    "finger",
                    "hand-o-left",
                    "left",
                    "point",
                    "previous",
                    "hand-point-left"
                ]
            },
            {
                "name": "Hand Pointing Down",
                "id": "hand-point-down",
                "filter": [
                    "arrows",
                    "hands",
                    "finger",
                    "hand-o-down",
                    "point",
                    "hand-point-down"
                ]
            },
            {
                "name": "Peace (Hand)",
                "id": "hand-peace",
                "filter": [
                    "hands",
                    "hand-peace"
                ]
            },
            {
                "name": "Paper (Hand)",
                "id": "hand-paper",
                "filter": [
                    "hands",
                    "stop",
                    "hand-paper"
                ]
            },
            {
                "name": "Lizard (Hand)",
                "id": "hand-lizard",
                "filter": [
                    "hands",
                    "hand-lizard"
                ]
            },
            {
                "name": "Hand Holding US Dollar",
                "id": "hand-holding-usd",
                "filter": [
                    "charity",
                    "$",
                    "dollar sign",
                    "donation",
                    "giving",
                    "money",
                    "price",
                    "hand-holding-usd"
                ]
            },
            {
                "name": "Hand Holding Heart",
                "id": "hand-holding-heart",
                "filter": [
                    "charity",
                    "hand-holding-heart"
                ]
            },
            {
                "name": "Hand Holding",
                "id": "hand-holding",
                "filter": [
                    "hands",
                    "hand-holding"
                ]
            },
            {
                "name": "Hacker News Square",
                "id": "hacker-news-square",
                "filter": [
                    "hacker-news-square"
                ]
            },
            {
                "name": "Hacker News",
                "id": "hacker-news",
                "filter": [
                    "hacker-news"
                ]
            },
            {
                "name": "H Square",
                "id": "h-square",
                "filter": [
                    "health",
                    "maps",
                    "hospital",
                    "hotel",
                    "h-square"
                ]
            },
            {
                "name": "Gulp",
                "id": "gulp",
                "filter": [
                    "gulp"
                ]
            },
            {
                "name": "Grunt",
                "id": "grunt",
                "filter": [
                    "grunt"
                ]
            },
            {
                "name": "Gripfire, Inc.",
                "id": "gripfire",
                "filter": [
                    "gripfire"
                ]
            },
            {
                "name": "Grip Vertical",
                "id": "grip-vertical",
                "filter": [
                    "interfaces",
                    "affordance",
                    "drag",
                    "drop",
                    "grab",
                    "handle",
                    "grip-vertical"
                ]
            },
            {
                "name": "Grip Horizontal",
                "id": "grip-horizontal",
                "filter": [
                    "interfaces",
                    "affordance",
                    "drag",
                    "drop",
                    "grab",
                    "handle",
                    "grip-horizontal"
                ]
            },
            {
                "name": "Grinning Winking Face",
                "id": "grin-wink",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "flirt",
                    "laugh",
                    "smile",
                    "grin-wink"
                ]
            },
            {
                "name": "Winking Face With Tongue",
                "id": "grin-tongue-wink",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "grin-tongue-wink"
                ]
            },
            {
                "name": "Squinting Face With Tongue",
                "id": "grin-tongue-squint",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "grin-tongue-squint"
                ]
            },
            {
                "name": "Face With Tongue",
                "id": "grin-tongue",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "grin-tongue"
                ]
            },
            {
                "name": "Face With Tears of Joy",
                "id": "grin-tears",
                "filter": [
                    "emoji",
                    "LOL",
                    "emoticon",
                    "face",
                    "grin-tears"
                ]
            },
            {
                "name": "Star-Struck",
                "id": "grin-stars",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "star-struck",
                    "grin-stars"
                ]
            },
            {
                "name": "Rolling on the Floor Laughing",
                "id": "grin-squint-tears",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "happy",
                    "smile",
                    "grin-squint-tears"
                ]
            },
            {
                "name": "Grinning Squinting Face",
                "id": "grin-squint",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "laugh",
                    "smile",
                    "grin-squint"
                ]
            },
            {
                "name": "Smiling Face With Heart-Eyes",
                "id": "grin-hearts",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "love",
                    "smile",
                    "grin-hearts"
                ]
            },
            {
                "name": "Grinning Face With Sweat",
                "id": "grin-beam-sweat",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "smile",
                    "grin-beam-sweat"
                ]
            },
            {
                "name": "Grinning Face With Smiling Eyes",
                "id": "grin-beam",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "laugh",
                    "smile",
                    "grin-beam"
                ]
            },
            {
                "name": "Alternate Grinning Face",
                "id": "grin-alt",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "laugh",
                    "smile",
                    "grin-alt"
                ]
            },
            {
                "name": "Grinning Face",
                "id": "grin",
                "filter": [
                    "emoji",
                    "emoticon",
                    "face",
                    "laugh",
                    "smile",
                    "grin"
                ]
            },
            {
                "name": "Grimacing Face",
                "id": "grimace",
                "filter": [
                    "emoji",
                    "cringe",
                    "emoticon",
                    "face",
                    "grimace"
                ]
            },
            {
                "name": "Greater Than Equal To",
                "id": "greater-than-equal",
                "filter": [
                    "mathematics",
                    "greater-than-equal"
                ]
            },
            {
                "name": "Greater Than",
                "id": "greater-than",
                "filter": [
                    "mathematics",
                    "greater-than"
                ]
            },
            {
                "name": "Grav",
                "id": "grav",
                "filter": [
                    "grav"
                ]
            },
            {
                "name": "Gratipay (Gittip)",
                "id": "gratipay",
                "filter": [
                    "favorite",
                    "heart",
                    "like",
                    "love",
                    "gratipay"
                ]
            },
            {
                "name": "Graduation Cap",
                "id": "graduation-cap",
                "filter": [
                    "objects",
                    "maps",
                    "learning",
                    "school",
                    "student",
                    "graduation-cap"
                ]
            },
            {
                "name": "Google Wallet",
                "id": "google-wallet",
                "filter": [
                    "payments-shopping",
                    "google-wallet"
                ]
            },
            {
                "name": "Google Plus Square",
                "id": "google-plus-square",
                "filter": [
                    "social network",
                    "google-plus-square"
                ]
            },
            {
                "name": "Google Plus G",
                "id": "google-plus-g",
                "filter": [
                    "google-plus",
                    "social network",
                    "google-plus-g"
                ]
            },
            {
                "name": "Google Plus",
                "id": "google-plus",
                "filter": [
                    "google-plus-circle",
                    "google-plus-official",
                    "google-plus"
                ]
            },
            {
                "name": "Google Play",
                "id": "google-play",
                "filter": [
                    "google-play"
                ]
            },
            {
                "name": "Google Drive",
                "id": "google-drive",
                "filter": [
                    "google-drive"
                ]
            },
            {
                "name": "Google Logo",
                "id": "google",
                "filter": [
                    "google"
                ]
            },
            {
                "name": "Goodreads G",
                "id": "goodreads-g",
                "filter": [
                    "goodreads-g"
                ]
            },
            {
                "name": "Goodreads",
                "id": "goodreads",
                "filter": [
                    "goodreads"
                ]
            },
            {
                "name": "Golf Ball",
                "id": "golf-ball",
                "filter": [
                    "sports",
                    "golf-ball"
                ]
            },
            {
                "name": "Gofore",
                "id": "gofore",
                "filter": [
                    "gofore"
                ]
            },
            {
                "name": "Globe with Asia shown",
                "id": "globe-asia",
                "filter": [
                    "travel",
                    "all",
                    "country",
                    "earth",
                    "global",
                    "gps",
                    "language",
                    "localize",
                    "location",
                    "map",
                    "online",
                    "place",
                    "planet",
                    "translate",
                    "travel",
                    "world",
                    "globe-asia"
                ]
            },
            {
                "name": "Globe with Americas shown",
                "id": "globe-americas",
                "filter": [
                    "travel",
                    "all",
                    "country",
                    "earth",
                    "global",
                    "gps",
                    "language",
                    "localize",
                    "location",
                    "map",
                    "online",
                    "place",
                    "planet",
                    "translate",
                    "travel",
                    "world",
                    "globe-americas"
                ]
            },
            {
                "name": "Globe with Africa shown",
                "id": "globe-africa",
                "filter": [
                    "travel",
                    "all",
                    "country",
                    "earth",
                    "global",
                    "gps",
                    "language",
                    "localize",
                    "location",
                    "map",
                    "online",
                    "place",
                    "planet",
                    "translate",
                    "travel",
                    "world",
                    "globe-africa"
                ]
            },
            {
                "name": "Globe",
                "id": "globe",
                "filter": [
                    "charity",
                    "business",
                    "objects",
                    "maps",
                    "all",
                    "coordinates",
                    "country",
                    "earth",
                    "global",
                    "gps",
                    "language",
                    "localize",
                    "location",
                    "map",
                    "online",
                    "place",
                    "planet",
                    "translate",
                    "travel",
                    "world",
                    "globe"
                ]
            },
            {
                "name": "Glide G",
                "id": "glide-g",
                "filter": [
                    "glide-g"
                ]
            },
            {
                "name": "Glide",
                "id": "glide",
                "filter": [
                    "glide"
                ]
            },
            {
                "name": "Glasses",
                "id": "glasses",
                "filter": [
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "foureyes",
                    "hipster",
                    "nerd",
                    "reading",
                    "sight",
                    "spectacles",
                    "glasses"
                ]
            },
            {
                "name": "Glass Martini-alt",
                "id": "glass-martini-alt",
                "filter": [
                    "travel",
                    "glass-martini-alt"
                ]
            },
            {
                "name": "Martini Glass",
                "id": "glass-martini",
                "filter": [
                    "travel",
                    "objects",
                    "maps",
                    "alcohol",
                    "bar",
                    "drink",
                    "glass",
                    "liquor",
                    "martini",
                    "glass-martini"
                ]
            },
            {
                "name": "Gitter",
                "id": "gitter",
                "filter": [
                    "gitter"
                ]
            },
            {
                "name": "GitLab",
                "id": "gitlab",
                "filter": [
                    "Axosoft",
                    "gitlab"
                ]
            },
            {
                "name": "GitKraken",
                "id": "gitkraken",
                "filter": [
                    "gitkraken"
                ]
            },
            {
                "name": "GitHub Square",
                "id": "github-square",
                "filter": [
                    "octocat",
                    "github-square"
                ]
            },
            {
                "name": "Alternate GitHub",
                "id": "github-alt",
                "filter": [
                    "octocat",
                    "github-alt"
                ]
            },
            {
                "name": "GitHub",
                "id": "github",
                "filter": [
                    "octocat",
                    "github"
                ]
            },
            {
                "name": "Git Square",
                "id": "git-square",
                "filter": [
                    "git-square"
                ]
            },
            {
                "name": "Git",
                "id": "git",
                "filter": [
                    "git"
                ]
            },
            {
                "name": "gift",
                "id": "gift",
                "filter": [
                    "charity",
                    "payments-shopping",
                    "objects",
                    "maps",
                    "generosity",
                    "giving",
                    "party",
                    "present",
                    "wrapped",
                    "gift"
                ]
            },
            {
                "name": "GG Currency Circle",
                "id": "gg-circle",
                "filter": [
                    "currency",
                    "gg-circle"
                ]
            },
            {
                "name": "GG Currency",
                "id": "gg",
                "filter": [
                    "currency",
                    "gg"
                ]
            },
            {
                "name": "Get Pocket",
                "id": "get-pocket",
                "filter": [
                    "get-pocket"
                ]
            },
            {
                "name": "Genderless",
                "id": "genderless",
                "filter": [
                    "gender",
                    "genderless"
                ]
            },
            {
                "name": "Gem",
                "id": "gem",
                "filter": [
                    "payments-shopping",
                    "objects",
                    "diamond",
                    "gem"
                ]
            },
            {
                "name": "Gavel",
                "id": "gavel",
                "filter": [
                    "objects",
                    "maps",
                    "hammer",
                    "judge",
                    "lawyer",
                    "opinion",
                    "gavel"
                ]
            },
            {
                "name": "Gas Pump",
                "id": "gas-pump",
                "filter": [
                    "gas-pump"
                ]
            },
            {
                "name": "Gamepad",
                "id": "gamepad",
                "filter": [
                    "objects",
                    "maps",
                    "controller",
                    "gamepad"
                ]
            },
            {
                "name": "Galactic Senate",
                "id": "galactic-senate",
                "filter": [
                    "galactic-senate"
                ]
            },
            {
                "name": "Galactic Republic",
                "id": "galactic-republic",
                "filter": [
                    "galactic-republic"
                ]
            },
            {
                "name": "Futbol",
                "id": "futbol",
                "filter": [
                    "sports",
                    "objects",
                    "ball",
                    "football",
                    "soccer",
                    "futbol"
                ]
            },
            {
                "name": "Fulcrum",
                "id": "fulcrum",
                "filter": [
                    "fulcrum"
                ]
            },
            {
                "name": "Frowning Face With Open Mouth",
                "id": "frown-open",
                "filter": [
                    "emoji",
                    "disapprove",
                    "emoticon",
                    "face",
                    "rating",
                    "sad",
                    "frown-open"
                ]
            },
            {
                "name": "Frowning Face",
                "id": "frown",
                "filter": [
                    "users-people",
                    "chat",
                    "interfaces",
                    "emoji",
                    "disapprove",
                    "emoticon",
                    "face",
                    "rating",
                    "sad",
                    "frown"
                ]
            },
            {
                "name": "Frog",
                "id": "frog",
                "filter": [
                    "animals",
                    "bullfrog",
                    "kermit",
                    "kiss",
                    "prince",
                    "toad",
                    "wart",
                    "frog"
                ]
            },
            {
                "name": "FreeBSD",
                "id": "freebsd",
                "filter": [
                    "freebsd"
                ]
            },
            {
                "name": "Free Code Camp",
                "id": "free-code-camp",
                "filter": [
                    "free-code-camp"
                ]
            },
            {
                "name": "Foursquare",
                "id": "foursquare",
                "filter": [
                    "foursquare"
                ]
            },
            {
                "name": "forward",
                "id": "forward",
                "filter": [
                    "audio-video",
                    "forward",
                    "next",
                    "forward"
                ]
            },
            {
                "name": "Forumbee",
                "id": "forumbee",
                "filter": [
                    "forumbee"
                ]
            },
            {
                "name": "Alternate Fort Awesome",
                "id": "fort-awesome-alt",
                "filter": [
                    "castle",
                    "fort-awesome-alt"
                ]
            },
            {
                "name": "Fort Awesome",
                "id": "fort-awesome",
                "filter": [
                    "castle",
                    "fort-awesome"
                ]
            },
            {
                "name": "Football Ball",
                "id": "football-ball",
                "filter": [
                    "sports",
                    "football-ball"
                ]
            },
            {
                "name": "Fonticons Fi",
                "id": "fonticons-fi",
                "filter": [
                    "fonticons-fi"
                ]
            },
            {
                "name": "Fonticons",
                "id": "fonticons",
                "filter": [
                    "fonticons"
                ]
            },
            {
                "name": "Font Awesome Full Logo",
                "id": "font-awesome-logo-full",
                "filter": [
                    "font-awesome-logo-full"
                ]
            },
            {
                "name": "Font Awesome Flag",
                "id": "font-awesome-flag",
                "filter": [
                    "font-awesome-flag"
                ]
            },
            {
                "name": "Alternate Font Awesome",
                "id": "font-awesome-alt",
                "filter": [
                    "font-awesome-alt"
                ]
            },
            {
                "name": "Font Awesome",
                "id": "font-awesome",
                "filter": [
                    "meanpath",
                    "font-awesome"
                ]
            },
            {
                "name": "font",
                "id": "font",
                "filter": [
                    "editors",
                    "text",
                    "font"
                ]
            },
            {
                "name": "Folder Open",
                "id": "folder-open",
                "filter": [
                    "files",
                    "status",
                    "writing",
                    "interfaces",
                    "business",
                    "code",
                    "folder-open"
                ]
            },
            {
                "name": "Folder",
                "id": "folder",
                "filter": [
                    "files",
                    "status",
                    "shapes",
                    "writing",
                    "interfaces",
                    "business",
                    "code",
                    "folder"
                ]
            },
            {
                "name": "Fly",
                "id": "fly",
                "filter": [
                    "fly"
                ]
            },
            {
                "name": "Flushed Face",
                "id": "flushed",
                "filter": [
                    "emoji",
                    "embarrassed",
                    "emoticon",
                    "face",
                    "flushed"
                ]
            },
            {
                "name": "Flipboard",
                "id": "flipboard",
                "filter": [
                    "flipboard"
                ]
            },
            {
                "name": "Flickr",
                "id": "flickr",
                "filter": [
                    "flickr"
                ]
            },
            {
                "name": "Flask",
                "id": "flask",
                "filter": [
                    "objects",
                    "maps",
                    "beaker",
                    "experimental",
                    "labs",
                    "science",
                    "flask"
                ]
            },
            {
                "name": "flag-checkered",
                "id": "flag-checkered",
                "filter": [
                    "interfaces",
                    "objects",
                    "maps",
                    "notice",
                    "notification",
                    "notify",
                    "report",
                    "flag-checkered"
                ]
            },
            {
                "name": "flag",
                "id": "flag",
                "filter": [
                    "interfaces",
                    "objects",
                    "maps",
                    "notice",
                    "notification",
                    "notify",
                    "report",
                    "flag"
                ]
            },
            {
                "name": "Fish",
                "id": "fish",
                "filter": [
                    "animals",
                    "fish"
                ]
            },
            {
                "name": "firstdraft",
                "id": "firstdraft",
                "filter": [
                    "firstdraft"
                ]
            },
            {
                "name": "Alternate First Order",
                "id": "first-order-alt",
                "filter": [
                    "first-order-alt"
                ]
            },
            {
                "name": "First Order",
                "id": "first-order",
                "filter": [
                    "first-order"
                ]
            },
            {
                "name": "First Aid",
                "id": "first-aid",
                "filter": [
                    "medical",
                    "first-aid"
                ]
            },
            {
                "name": "Firefox",
                "id": "firefox",
                "filter": [
                    "browser",
                    "firefox"
                ]
            },
            {
                "name": "fire-extinguisher",
                "id": "fire-extinguisher",
                "filter": [
                    "objects",
                    "maps",
                    "code",
                    "fire-extinguisher"
                ]
            },
            {
                "name": "fire",
                "id": "fire",
                "filter": [
                    "objects",
                    "maps",
                    "flame",
                    "hot",
                    "popular",
                    "fire"
                ]
            },
            {
                "name": "Fingerprint",
                "id": "fingerprint",
                "filter": [
                    "interfaces",
                    "human",
                    "id",
                    "identification",
                    "lock",
                    "smudge",
                    "touch",
                    "unique",
                    "unlock",
                    "fingerprint"
                ]
            },
            {
                "name": "Filter",
                "id": "filter",
                "filter": [
                    "interfaces",
                    "code",
                    "funnel",
                    "options",
                    "filter"
                ]
            },
            {
                "name": "Film",
                "id": "film",
                "filter": [
                    "images",
                    "audio-video",
                    "objects",
                    "movie",
                    "film"
                ]
            },
            {
                "name": "Fill Drip",
                "id": "fill-drip",
                "filter": [
                    "design",
                    "bucket",
                    "color",
                    "drop",
                    "paint",
                    "paint bucket",
                    "spill",
                    "fill-drip"
                ]
            },
            {
                "name": "Fill",
                "id": "fill",
                "filter": [
                    "design",
                    "bucket",
                    "color",
                    "paint",
                    "paint bucket",
                    "fill"
                ]
            },
            {
                "name": "Word File",
                "id": "file-word",
                "filter": [
                    "files",
                    "file-word"
                ]
            },
            {
                "name": "Video File",
                "id": "file-video",
                "filter": [
                    "files",
                    "audio-video",
                    "file-video"
                ]
            },
            {
                "name": "File Upload",
                "id": "file-upload",
                "filter": [
                    "interfaces",
                    "file-upload"
                ]
            },
            {
                "name": "File Signature",
                "id": "file-signature",
                "filter": [
                    "John Hancock",
                    "contract",
                    "document",
                    "name",
                    "file-signature"
                ]
            },
            {
                "name": "File Prescription",
                "id": "file-prescription",
                "filter": [
                    "medical",
                    "objects",
                    "drugs",
                    "medical",
                    "medicine",
                    "rx",
                    "file-prescription"
                ]
            },
            {
                "name": "Powerpoint File",
                "id": "file-powerpoint",
                "filter": [
                    "files",
                    "file-powerpoint"
                ]
            },
            {
                "name": "PDF File",
                "id": "file-pdf",
                "filter": [
                    "files",
                    "file-pdf"
                ]
            },
            {
                "name": "Alternate Medical File",
                "id": "file-medical-alt",
                "filter": [
                    "medical",
                    "file-medical-alt"
                ]
            },
            {
                "name": "Medical File",
                "id": "file-medical",
                "filter": [
                    "medical",
                    "file-medical"
                ]
            },
            {
                "name": "File Invoice with US Dollar",
                "id": "file-invoice-dollar",
                "filter": [
                    "$",
                    "bill",
                    "document",
                    "dollar-sign",
                    "money",
                    "receipt",
                    "usd",
                    "file-invoice-dollar"
                ]
            },
            {
                "name": "File Invoice",
                "id": "file-invoice",
                "filter": [
                    "bill",
                    "document",
                    "receipt",
                    "file-invoice"
                ]
            },
            {
                "name": "File Import",
                "id": "file-import",
                "filter": [
                    "interfaces",
                    "file-import"
                ]
            },
            {
                "name": "Image File",
                "id": "file-image",
                "filter": [
                    "files",
                    "images",
                    "file-image"
                ]
            },
            {
                "name": "File Export",
                "id": "file-export",
                "filter": [
                    "interfaces",
                    "file-export"
                ]
            },
            {
                "name": "Excel File",
                "id": "file-excel",
                "filter": [
                    "files",
                    "file-excel"
                ]
            },
            {
                "name": "File Download",
                "id": "file-download",
                "filter": [
                    "interfaces",
                    "file-download"
                ]
            },
            {
                "name": "File Contract",
                "id": "file-contract",
                "filter": [
                    "agreement",
                    "binding",
                    "document",
                    "legal",
                    "signature",
                    "file-contract"
                ]
            },
            {
                "name": "Code File",
                "id": "file-code",
                "filter": [
                    "files",
                    "code",
                    "file-code"
                ]
            },
            {
                "name": "Audio File",
                "id": "file-audio",
                "filter": [
                    "files",
                    "audio-video",
                    "file-audio"
                ]
            },
            {
                "name": "Archive File",
                "id": "file-archive",
                "filter": [
                    "files",
                    ".zip",
                    "bundle",
                    "compress",
                    "compression",
                    "download",
                    "zip",
                    "file-archive"
                ]
            },
            {
                "name": "Alternate File",
                "id": "file-alt",
                "filter": [
                    "files",
                    "status",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "code",
                    "document",
                    "file-text",
                    "invoice",
                    "new",
                    "page",
                    "pdf",
                    "file-alt"
                ]
            },
            {
                "name": "File",
                "id": "file",
                "filter": [
                    "files",
                    "status",
                    "shapes",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "code",
                    "document",
                    "new",
                    "page",
                    "pdf",
                    "resume",
                    "file"
                ]
            },
            {
                "name": "fighter-jet",
                "id": "fighter-jet",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "airplane",
                    "fast",
                    "fly",
                    "goose",
                    "maverick",
                    "plane",
                    "quick",
                    "top gun",
                    "transportation",
                    "travel",
                    "fighter-jet"
                ]
            },
            {
                "name": "Female",
                "id": "female",
                "filter": [
                    "users-people",
                    "human",
                    "person",
                    "profile",
                    "user",
                    "woman",
                    "female"
                ]
            },
            {
                "name": "Feather Alt",
                "id": "feather-alt",
                "filter": [
                    "animals",
                    "objects",
                    "bird",
                    "light",
                    "plucked",
                    "quill",
                    "feather-alt"
                ]
            },
            {
                "name": "Feather",
                "id": "feather",
                "filter": [
                    "animals",
                    "objects",
                    "bird",
                    "light",
                    "plucked",
                    "quill",
                    "feather"
                ]
            },
            {
                "name": "Fax",
                "id": "fax",
                "filter": [
                    "communication",
                    "business",
                    "objects",
                    "fax"
                ]
            },
            {
                "name": "fast-forward",
                "id": "fast-forward",
                "filter": [
                    "audio-video",
                    "end",
                    "last",
                    "next",
                    "fast-forward"
                ]
            },
            {
                "name": "fast-backward",
                "id": "fast-backward",
                "filter": [
                    "audio-video",
                    "beginning",
                    "first",
                    "previous",
                    "rewind",
                    "start",
                    "fast-backward"
                ]
            },
            {
                "name": "Facebook Square",
                "id": "facebook-square",
                "filter": [
                    "social network",
                    "facebook-square"
                ]
            },
            {
                "name": "Facebook Messenger",
                "id": "facebook-messenger",
                "filter": [
                    "facebook-messenger"
                ]
            },
            {
                "name": "Facebook F",
                "id": "facebook-f",
                "filter": [
                    "facebook",
                    "facebook-f"
                ]
            },
            {
                "name": "Facebook",
                "id": "facebook",
                "filter": [
                    "facebook-official",
                    "social network",
                    "facebook"
                ]
            },
            {
                "name": "Eye Slash",
                "id": "eye-slash",
                "filter": [
                    "images",
                    "status",
                    "design",
                    "interfaces",
                    "maps",
                    "blind",
                    "hide",
                    "show",
                    "toggle",
                    "unseen",
                    "views",
                    "visible",
                    "visiblity",
                    "eye-slash"
                ]
            },
            {
                "name": "Eye Dropper",
                "id": "eye-dropper",
                "filter": [
                    "images",
                    "design",
                    "objects",
                    "eyedropper",
                    "eye-dropper"
                ]
            },
            {
                "name": "Eye",
                "id": "eye",
                "filter": [
                    "images",
                    "status",
                    "design",
                    "interfaces",
                    "objects",
                    "maps",
                    "optic",
                    "see",
                    "seen",
                    "show",
                    "sight",
                    "views",
                    "visible",
                    "eye"
                ]
            },
            {
                "name": "Alternate External Link Square",
                "id": "external-link-square-alt",
                "filter": [
                    "arrows",
                    "interfaces",
                    "external-link-square",
                    "new",
                    "open",
                    "external-link-square-alt"
                ]
            },
            {
                "name": "Alternate External Link",
                "id": "external-link-alt",
                "filter": [
                    "arrows",
                    "interfaces",
                    "external-link",
                    "new",
                    "open",
                    "external-link-alt"
                ]
            },
            {
                "name": "ExpeditedSSL",
                "id": "expeditedssl",
                "filter": [
                    "expeditedssl"
                ]
            },
            {
                "name": "Alternate Expand Arrows",
                "id": "expand-arrows-alt",
                "filter": [
                    "arrows",
                    "audio-video",
                    "arrows-alt",
                    "bigger",
                    "enlarge",
                    "move",
                    "resize",
                    "expand-arrows-alt"
                ]
            },
            {
                "name": "Expand",
                "id": "expand",
                "filter": [
                    "images",
                    "audio-video",
                    "bigger",
                    "enlarge",
                    "resize",
                    "expand"
                ]
            },
            {
                "name": "Exclamation Triangle",
                "id": "exclamation-triangle",
                "filter": [
                    "status",
                    "interfaces",
                    "alert",
                    "danger",
                    "error",
                    "important",
                    "notice",
                    "notification",
                    "notify",
                    "problem",
                    "warning",
                    "exclamation-triangle"
                ]
            },
            {
                "name": "Exclamation Circle",
                "id": "exclamation-circle",
                "filter": [
                    "status",
                    "interfaces",
                    "alert",
                    "danger",
                    "error",
                    "important",
                    "notice",
                    "notification",
                    "notify",
                    "problem",
                    "warning",
                    "exclamation-circle"
                ]
            },
            {
                "name": "exclamation",
                "id": "exclamation",
                "filter": [
                    "status",
                    "interfaces",
                    "alert",
                    "danger",
                    "error",
                    "important",
                    "notice",
                    "notification",
                    "notify",
                    "problem",
                    "warning",
                    "exclamation"
                ]
            },
            {
                "name": "Alternate Exchange",
                "id": "exchange-alt",
                "filter": [
                    "arrows",
                    "arrow",
                    "arrows",
                    "exchange",
                    "reciprocate",
                    "return",
                    "swap",
                    "transfer",
                    "exchange-alt"
                ]
            },
            {
                "name": "Euro Sign",
                "id": "euro-sign",
                "filter": [
                    "currency",
                    "eur",
                    "eur",
                    "euro-sign"
                ]
            },
            {
                "name": "Etsy",
                "id": "etsy",
                "filter": [
                    "etsy"
                ]
            },
            {
                "name": "Ethereum",
                "id": "ethereum",
                "filter": [
                    "payments-shopping",
                    "ethereum"
                ]
            },
            {
                "name": "Erlang",
                "id": "erlang",
                "filter": [
                    "erlang"
                ]
            },
            {
                "name": "eraser",
                "id": "eraser",
                "filter": [
                    "design",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "delete",
                    "remove",
                    "eraser"
                ]
            },
            {
                "name": "Equals",
                "id": "equals",
                "filter": [
                    "mathematics",
                    "equals"
                ]
            },
            {
                "name": "Envira Gallery",
                "id": "envira",
                "filter": [
                    "leaf",
                    "envira"
                ]
            },
            {
                "name": "Envelope Square",
                "id": "envelope-square",
                "filter": [
                    "communication",
                    "business",
                    "e-mail",
                    "email",
                    "letter",
                    "mail",
                    "message",
                    "notification",
                    "support",
                    "envelope-square"
                ]
            },
            {
                "name": "Envelope Open",
                "id": "envelope-open",
                "filter": [
                    "writing",
                    "interfaces",
                    "communication",
                    "business",
                    "objects",
                    "e-mail",
                    "email",
                    "letter",
                    "mail",
                    "message",
                    "notification",
                    "support",
                    "envelope-open"
                ]
            },
            {
                "name": "Envelope",
                "id": "envelope",
                "filter": [
                    "writing",
                    "interfaces",
                    "communication",
                    "business",
                    "objects",
                    "e-mail",
                    "email",
                    "letter",
                    "mail",
                    "message",
                    "notification",
                    "support",
                    "envelope"
                ]
            },
            {
                "name": "Galactic Empire",
                "id": "empire",
                "filter": [
                    "empire"
                ]
            },
            {
                "name": "Ember",
                "id": "ember",
                "filter": [
                    "ember"
                ]
            },
            {
                "name": "Vertical Ellipsis",
                "id": "ellipsis-v",
                "filter": [
                    "interfaces",
                    "dots",
                    "drag",
                    "kebab",
                    "list",
                    "menu",
                    "nav",
                    "navigation",
                    "ol",
                    "reorder",
                    "settings",
                    "ul",
                    "ellipsis-v"
                ]
            },
            {
                "name": "Horizontal Ellipsis",
                "id": "ellipsis-h",
                "filter": [
                    "interfaces",
                    "dots",
                    "drag",
                    "kebab",
                    "list",
                    "menu",
                    "nav",
                    "navigation",
                    "ol",
                    "reorder",
                    "settings",
                    "ul",
                    "ellipsis-h"
                ]
            },
            {
                "name": "Elementor",
                "id": "elementor",
                "filter": [
                    "elementor"
                ]
            },
            {
                "name": "eject",
                "id": "eject",
                "filter": [
                    "audio-video",
                    "eject"
                ]
            },
            {
                "name": "Edit",
                "id": "edit",
                "filter": [
                    "design",
                    "writing",
                    "interfaces",
                    "editors",
                    "business",
                    "edit",
                    "pen",
                    "pencil",
                    "update",
                    "write",
                    "edit"
                ]
            },
            {
                "name": "Edge Browser",
                "id": "edge",
                "filter": [
                    "browser",
                    "ie",
                    "edge"
                ]
            },
            {
                "name": "eBay",
                "id": "ebay",
                "filter": [
                    "ebay"
                ]
            },
            {
                "name": "Earlybirds",
                "id": "earlybirds",
                "filter": [
                    "earlybirds"
                ]
            },
            {
                "name": "Dyalog",
                "id": "dyalog",
                "filter": [
                    "dyalog"
                ]
            },
            {
                "name": "Dumbbell",
                "id": "dumbbell",
                "filter": [
                    "travel",
                    "sports",
                    "exercise",
                    "gym",
                    "strength",
                    "weight",
                    "weight-lifting",
                    "dumbbell"
                ]
            },
            {
                "name": "Drupal Logo",
                "id": "drupal",
                "filter": [
                    "drupal"
                ]
            },
            {
                "name": "Drum Steelpan",
                "id": "drum-steelpan",
                "filter": [
                    "objects",
                    "calypso",
                    "instrument",
                    "music",
                    "percussion",
                    "reggae",
                    "snare",
                    "sound",
                    "steel",
                    "tropical",
                    "drum-steelpan"
                ]
            },
            {
                "name": "Drum",
                "id": "drum",
                "filter": [
                    "objects",
                    "instrument",
                    "music",
                    "percussion",
                    "snare",
                    "sound",
                    "drum"
                ]
            },
            {
                "name": "Dropbox",
                "id": "dropbox",
                "filter": [
                    "dropbox"
                ]
            },
            {
                "name": "Dribbble Square",
                "id": "dribbble-square",
                "filter": [
                    "dribbble-square"
                ]
            },
            {
                "name": "Dribbble",
                "id": "dribbble",
                "filter": [
                    "dribbble"
                ]
            },
            {
                "name": "Drafting Compass",
                "id": "drafting-compass",
                "filter": [
                    "design",
                    "mechanical drawing",
                    "plot",
                    "plotting",
                    "drafting-compass"
                ]
            },
            {
                "name": "Draft2digital",
                "id": "draft2digital",
                "filter": [
                    "draft2digital"
                ]
            },
            {
                "name": "Download",
                "id": "download",
                "filter": [
                    "computers",
                    "arrows",
                    "interfaces",
                    "import",
                    "download"
                ]
            },
            {
                "name": "Dove",
                "id": "dove",
                "filter": [
                    "animals",
                    "charity",
                    "dove"
                ]
            },
            {
                "name": "Dot Circle",
                "id": "dot-circle",
                "filter": [
                    "interfaces",
                    "bullseye",
                    "notification",
                    "target",
                    "dot-circle"
                ]
            },
            {
                "name": "Door Open",
                "id": "door-open",
                "filter": [
                    "status",
                    "objects",
                    "door-open"
                ]
            },
            {
                "name": "Door Closed",
                "id": "door-closed",
                "filter": [
                    "status",
                    "objects",
                    "door-closed"
                ]
            },
            {
                "name": "Donate",
                "id": "donate",
                "filter": [
                    "charity",
                    "generosity",
                    "give",
                    "donate"
                ]
            },
            {
                "name": "Dolly Flatbed",
                "id": "dolly-flatbed",
                "filter": [
                    "logistics",
                    "dolly-flatbed"
                ]
            },
            {
                "name": "Dolly",
                "id": "dolly",
                "filter": [
                    "logistics",
                    "moving",
                    "dolly"
                ]
            },
            {
                "name": "Dollar Sign",
                "id": "dollar-sign",
                "filter": [
                    "charity",
                    "currency",
                    "maps",
                    "$",
                    "dollar-sign",
                    "money",
                    "price",
                    "usd",
                    "dollar-sign"
                ]
            },
            {
                "name": "Docker",
                "id": "docker",
                "filter": [
                    "docker"
                ]
            },
            {
                "name": "DocHub",
                "id": "dochub",
                "filter": [
                    "dochub"
                ]
            },
            {
                "name": "DNA",
                "id": "dna",
                "filter": [
                    "medical",
                    "double helix",
                    "helix",
                    "dna"
                ]
            },
            {
                "name": "Dizzy Face",
                "id": "dizzy",
                "filter": [
                    "emoji",
                    "dazed",
                    "disapprove",
                    "emoticon",
                    "face",
                    "dizzy"
                ]
            },
            {
                "name": "Divide",
                "id": "divide",
                "filter": [
                    "mathematics",
                    "divide"
                ]
            },
            {
                "name": "Discourse",
                "id": "discourse",
                "filter": [
                    "discourse"
                ]
            },
            {
                "name": "Discord",
                "id": "discord",
                "filter": [
                    "discord"
                ]
            },
            {
                "name": "Digital Tachograph",
                "id": "digital-tachograph",
                "filter": [
                    "objects",
                    "digital-tachograph"
                ]
            },
            {
                "name": "Digital Ocean",
                "id": "digital-ocean",
                "filter": [
                    "digital-ocean"
                ]
            },
            {
                "name": "Digg Logo",
                "id": "digg",
                "filter": [
                    "digg"
                ]
            },
            {
                "name": "Dice Two",
                "id": "dice-two",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-two"
                ]
            },
            {
                "name": "Dice Three",
                "id": "dice-three",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-three"
                ]
            },
            {
                "name": "Dice Six",
                "id": "dice-six",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-six"
                ]
            },
            {
                "name": "Dice One",
                "id": "dice-one",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-one"
                ]
            },
            {
                "name": "Dice Four",
                "id": "dice-four",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-four"
                ]
            },
            {
                "name": "Dice Five",
                "id": "dice-five",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice-five"
                ]
            },
            {
                "name": "Dice",
                "id": "dice",
                "filter": [
                    "objects",
                    "chance",
                    "gambling",
                    "game",
                    "roll",
                    "dice"
                ]
            },
            {
                "name": "Diagnoses",
                "id": "diagnoses",
                "filter": [
                    "medical",
                    "diagnoses"
                ]
            },
            {
                "name": "deviantART",
                "id": "deviantart",
                "filter": [
                    "deviantart"
                ]
            },
            {
                "name": "Desktop",
                "id": "desktop",
                "filter": [
                    "computers",
                    "computer",
                    "cpu",
                    "demo",
                    "desktop",
                    "device",
                    "machine",
                    "monitor",
                    "pc",
                    "screen",
                    "desktop"
                ]
            },
            {
                "name": "Deskpro",
                "id": "deskpro",
                "filter": [
                    "deskpro"
                ]
            },
            {
                "name": "deploy.dog",
                "id": "deploydog",
                "filter": [
                    "deploydog"
                ]
            },
            {
                "name": "Delicious Logo",
                "id": "delicious",
                "filter": [
                    "delicious"
                ]
            },
            {
                "name": "Deaf",
                "id": "deaf",
                "filter": [
                    "accessibility",
                    "deaf"
                ]
            },
            {
                "name": "Database",
                "id": "database",
                "filter": [
                    "computers",
                    "interfaces",
                    "database"
                ]
            },
            {
                "name": "DashCube",
                "id": "dashcube",
                "filter": [
                    "dashcube"
                ]
            },
            {
                "name": "Dungeons & Dragons",
                "id": "d-and-d",
                "filter": [
                    "d-and-d"
                ]
            },
            {
                "name": "Cuttlefish",
                "id": "cuttlefish",
                "filter": [
                    "cuttlefish"
                ]
            },
            {
                "name": "Cut",
                "id": "cut",
                "filter": [
                    "files",
                    "design",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "scissors",
                    "scissors",
                    "cut"
                ]
            },
            {
                "name": "Cubes",
                "id": "cubes",
                "filter": [
                    "objects",
                    "packages",
                    "cubes"
                ]
            },
            {
                "name": "Cube",
                "id": "cube",
                "filter": [
                    "objects",
                    "package",
                    "cube"
                ]
            },
            {
                "name": "Alternate CSS3 Logo",
                "id": "css3-alt",
                "filter": [
                    "css3-alt"
                ]
            },
            {
                "name": "CSS 3 Logo",
                "id": "css3",
                "filter": [
                    "code",
                    "css3"
                ]
            },
            {
                "name": "Crown",
                "id": "crown",
                "filter": [
                    "crown"
                ]
            },
            {
                "name": "Crow",
                "id": "crow",
                "filter": [
                    "animals",
                    "bird",
                    "bullfrog",
                    "toad",
                    "crow"
                ]
            },
            {
                "name": "Crosshairs",
                "id": "crosshairs",
                "filter": [
                    "design",
                    "spinners",
                    "maps",
                    "gpd",
                    "picker",
                    "position",
                    "crosshairs"
                ]
            },
            {
                "name": "Alternate Crop",
                "id": "crop-alt",
                "filter": [
                    "design",
                    "crop-alt"
                ]
            },
            {
                "name": "crop",
                "id": "crop",
                "filter": [
                    "design",
                    "design",
                    "crop"
                ]
            },
            {
                "name": "Credit Card",
                "id": "credit-card",
                "filter": [
                    "payments-shopping",
                    "buy",
                    "checkout",
                    "credit-card-alt",
                    "debit",
                    "money",
                    "payment",
                    "purchase",
                    "credit-card"
                ]
            },
            {
                "name": "Creative Commons Share",
                "id": "creative-commons-share",
                "filter": [
                    "creative-commons-share"
                ]
            },
            {
                "name": "Creative Commons Sampling +",
                "id": "creative-commons-sampling-plus",
                "filter": [
                    "creative-commons-sampling-plus"
                ]
            },
            {
                "name": "Creative Commons Sampling",
                "id": "creative-commons-sampling",
                "filter": [
                    "creative-commons-sampling"
                ]
            },
            {
                "name": "Creative Commons Share Alike",
                "id": "creative-commons-sa",
                "filter": [
                    "creative-commons-sa"
                ]
            },
            {
                "name": "Creative Commons Remix",
                "id": "creative-commons-remix",
                "filter": [
                    "creative-commons-remix"
                ]
            },
            {
                "name": "Creative Commons Public Domain Alternate",
                "id": "creative-commons-pd-alt",
                "filter": [
                    "creative-commons-pd-alt"
                ]
            },
            {
                "name": "Creative Commons Public Domain",
                "id": "creative-commons-pd",
                "filter": [
                    "creative-commons-pd"
                ]
            },
            {
                "name": "Creative Commons No Derivative Works",
                "id": "creative-commons-nd",
                "filter": [
                    "creative-commons-nd"
                ]
            },
            {
                "name": "Creative Commons Noncommercial (Yen Sign)",
                "id": "creative-commons-nc-jp",
                "filter": [
                    "creative-commons-nc-jp"
                ]
            },
            {
                "name": "Creative Commons Noncommercial (Euro Sign)",
                "id": "creative-commons-nc-eu",
                "filter": [
                    "creative-commons-nc-eu"
                ]
            },
            {
                "name": "Creative Commons Noncommercial",
                "id": "creative-commons-nc",
                "filter": [
                    "creative-commons-nc"
                ]
            },
            {
                "name": "Creative Commons Attribution",
                "id": "creative-commons-by",
                "filter": [
                    "creative-commons-by"
                ]
            },
            {
                "name": "Creative Commons",
                "id": "creative-commons",
                "filter": [
                    "creative-commons"
                ]
            },
            {
                "name": "cPanel",
                "id": "cpanel",
                "filter": [
                    "cpanel"
                ]
            },
            {
                "name": "Couch",
                "id": "couch",
                "filter": [
                    "moving",
                    "couch"
                ]
            },
            {
                "name": "Copyright",
                "id": "copyright",
                "filter": [
                    "business",
                    "copyright"
                ]
            },
            {
                "name": "Copy",
                "id": "copy",
                "filter": [
                    "files",
                    "design",
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "clone",
                    "duplicate",
                    "file",
                    "files-o",
                    "copy"
                ]
            },
            {
                "name": "Cookie Bite",
                "id": "cookie-bite",
                "filter": [
                    "objects",
                    "baked good",
                    "bitten",
                    "chips",
                    "eating",
                    "food",
                    "snack",
                    "sweet",
                    "treat",
                    "cookie-bite"
                ]
            },
            {
                "name": "Cookie",
                "id": "cookie",
                "filter": [
                    "objects",
                    "baked good",
                    "chips",
                    "food",
                    "snack",
                    "sweet",
                    "treat",
                    "cookie"
                ]
            },
            {
                "name": "Contao",
                "id": "contao",
                "filter": [
                    "contao"
                ]
            },
            {
                "name": "Connect Develop",
                "id": "connectdevelop",
                "filter": [
                    "connectdevelop"
                ]
            },
            {
                "name": "Concierge Bell",
                "id": "concierge-bell",
                "filter": [
                    "travel",
                    "attention",
                    "hotel",
                    "service",
                    "support",
                    "concierge-bell"
                ]
            },
            {
                "name": "Compress",
                "id": "compress",
                "filter": [
                    "images",
                    "audio-video",
                    "collapse",
                    "combine",
                    "contract",
                    "merge",
                    "smaller",
                    "compress"
                ]
            },
            {
                "name": "Compass",
                "id": "compass",
                "filter": [
                    "spinners",
                    "business",
                    "objects",
                    "directory",
                    "location",
                    "menu",
                    "safari",
                    "compass"
                ]
            },
            {
                "name": "Compact Disc",
                "id": "compact-disc",
                "filter": [
                    "bluray",
                    "cd",
                    "disc",
                    "media",
                    "compact-disc"
                ]
            },
            {
                "name": "comments",
                "id": "comments",
                "filter": [
                    "chat",
                    "communication",
                    "bubble",
                    "chat",
                    "conversation",
                    "feedback",
                    "message",
                    "note",
                    "notification",
                    "sms",
                    "speech",
                    "texting",
                    "comments"
                ]
            },
            {
                "name": "Comment Slash",
                "id": "comment-slash",
                "filter": [
                    "chat",
                    "comment-slash"
                ]
            },
            {
                "name": "Comment Dots",
                "id": "comment-dots",
                "filter": [
                    "chat",
                    "comment-dots"
                ]
            },
            {
                "name": "Alternate Comment",
                "id": "comment-alt",
                "filter": [
                    "chat",
                    "communication",
                    "bubble",
                    "chat",
                    "commenting",
                    "commenting",
                    "conversation",
                    "feedback",
                    "message",
                    "note",
                    "notification",
                    "sms",
                    "speech",
                    "texting",
                    "comment-alt"
                ]
            },
            {
                "name": "comment",
                "id": "comment",
                "filter": [
                    "chat",
                    "shapes",
                    "communication",
                    "bubble",
                    "chat",
                    "conversation",
                    "feedback",
                    "message",
                    "note",
                    "notification",
                    "sms",
                    "speech",
                    "texting",
                    "comment"
                ]
            },
            {
                "name": "Columns",
                "id": "columns",
                "filter": [
                    "editors",
                    "business",
                    "dashboard",
                    "panes",
                    "split",
                    "columns"
                ]
            },
            {
                "name": "Coins",
                "id": "coins",
                "filter": [
                    "coins"
                ]
            },
            {
                "name": "cogs",
                "id": "cogs",
                "filter": [
                    "interfaces",
                    "objects",
                    "gears",
                    "settings",
                    "cogs"
                ]
            },
            {
                "name": "cog",
                "id": "cog",
                "filter": [
                    "spinners",
                    "interfaces",
                    "objects",
                    "settings",
                    "cog"
                ]
            },
            {
                "name": "Coffee",
                "id": "coffee",
                "filter": [
                    "interfaces",
                    "business",
                    "objects",
                    "maps",
                    "code",
                    "breakfast",
                    "cafe",
                    "drink",
                    "morning",
                    "mug",
                    "tea",
                    "coffee"
                ]
            },
            {
                "name": "Codie Pie",
                "id": "codiepie",
                "filter": [
                    "codiepie"
                ]
            },
            {
                "name": "Codepen",
                "id": "codepen",
                "filter": [
                    "codepen"
                ]
            },
            {
                "name": "Code Branch",
                "id": "code-branch",
                "filter": [
                    "code",
                    "branch",
                    "code-fork",
                    "fork",
                    "git",
                    "github",
                    "rebase",
                    "svn",
                    "vcs",
                    "version",
                    "code-branch"
                ]
            },
            {
                "name": "Code",
                "id": "code",
                "filter": [
                    "code",
                    "brackets",
                    "html",
                    "code"
                ]
            },
            {
                "name": "Cocktail",
                "id": "cocktail",
                "filter": [
                    "travel",
                    "alcohol",
                    "drink",
                    "cocktail"
                ]
            },
            {
                "name": "cloudversify",
                "id": "cloudversify",
                "filter": [
                    "cloudversify"
                ]
            },
            {
                "name": "Cloudsmith",
                "id": "cloudsmith",
                "filter": [
                    "cloudsmith"
                ]
            },
            {
                "name": "cloudscale.ch",
                "id": "cloudscale",
                "filter": [
                    "cloudscale"
                ]
            },
            {
                "name": "Alternate Cloud Upload",
                "id": "cloud-upload-alt",
                "filter": [
                    "arrows",
                    "interfaces",
                    "cloud-upload",
                    "cloud-upload-alt"
                ]
            },
            {
                "name": "Alternate Cloud Download",
                "id": "cloud-download-alt",
                "filter": [
                    "arrows",
                    "interfaces",
                    "cloud-download",
                    "cloud-download-alt"
                ]
            },
            {
                "name": "Cloud",
                "id": "cloud",
                "filter": [
                    "shapes",
                    "interfaces",
                    "objects",
                    "save",
                    "cloud"
                ]
            },
            {
                "name": "Closed Captioning",
                "id": "closed-captioning",
                "filter": [
                    "audio-video",
                    "accessibility",
                    "cc",
                    "closed-captioning"
                ]
            },
            {
                "name": "Clone",
                "id": "clone",
                "filter": [
                    "files",
                    "images",
                    "design",
                    "interfaces",
                    "editors",
                    "copy",
                    "duplicate",
                    "clone"
                ]
            },
            {
                "name": "Clock",
                "id": "clock",
                "filter": [
                    "date-time",
                    "date",
                    "late",
                    "schedule",
                    "timer",
                    "timestamp",
                    "watch",
                    "clock"
                ]
            },
            {
                "name": "Clipboard List",
                "id": "clipboard-list",
                "filter": [
                    "logistics",
                    "checklist",
                    "completed",
                    "done",
                    "finished",
                    "intinerary",
                    "ol",
                    "schedule",
                    "todo",
                    "ul",
                    "clipboard-list"
                ]
            },
            {
                "name": "Clipboard Check",
                "id": "clipboard-check",
                "filter": [
                    "logistics",
                    "accept",
                    "agree",
                    "confirm",
                    "done",
                    "ok",
                    "select",
                    "success",
                    "todo",
                    "yes",
                    "clipboard-check"
                ]
            },
            {
                "name": "Clipboard",
                "id": "clipboard",
                "filter": [
                    "interfaces",
                    "editors",
                    "business",
                    "objects",
                    "paste",
                    "clipboard"
                ]
            },
            {
                "name": "Circle Notched",
                "id": "circle-notch",
                "filter": [
                    "spinners",
                    "circle-o-notch",
                    "circle-notch"
                ]
            },
            {
                "name": "Circle",
                "id": "circle",
                "filter": [
                    "audio-video",
                    "shapes",
                    "interfaces",
                    "circle-thin",
                    "dot",
                    "notification",
                    "circle"
                ]
            },
            {
                "name": "Church",
                "id": "church",
                "filter": [
                    "buildings",
                    "objects",
                    "building",
                    "community",
                    "religion",
                    "church"
                ]
            },
            {
                "name": "Chrome",
                "id": "chrome",
                "filter": [
                    "browser",
                    "chrome"
                ]
            },
            {
                "name": "Child",
                "id": "child",
                "filter": [
                    "users-people",
                    "child"
                ]
            },
            {
                "name": "chevron-up",
                "id": "chevron-up",
                "filter": [
                    "arrows",
                    "chevron-up"
                ]
            },
            {
                "name": "chevron-right",
                "id": "chevron-right",
                "filter": [
                    "arrows",
                    "bracket",
                    "forward",
                    "next",
                    "chevron-right"
                ]
            },
            {
                "name": "chevron-left",
                "id": "chevron-left",
                "filter": [
                    "arrows",
                    "back",
                    "bracket",
                    "previous",
                    "chevron-left"
                ]
            },
            {
                "name": "chevron-down",
                "id": "chevron-down",
                "filter": [
                    "arrows",
                    "chevron-down"
                ]
            },
            {
                "name": "Chevron Circle Up",
                "id": "chevron-circle-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "chevron-circle-up"
                ]
            },
            {
                "name": "Chevron Circle Right",
                "id": "chevron-circle-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "forward",
                    "next",
                    "chevron-circle-right"
                ]
            },
            {
                "name": "Chevron Circle Left",
                "id": "chevron-circle-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "back",
                    "previous",
                    "chevron-circle-left"
                ]
            },
            {
                "name": "Chevron Circle Down",
                "id": "chevron-circle-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "dropdown",
                    "menu",
                    "more",
                    "chevron-circle-down"
                ]
            },
            {
                "name": "Chess Rook",
                "id": "chess-rook",
                "filter": [
                    "chess",
                    "chess-rook"
                ]
            },
            {
                "name": "Chess Queen",
                "id": "chess-queen",
                "filter": [
                    "chess",
                    "chess-queen"
                ]
            },
            {
                "name": "Chess Pawn",
                "id": "chess-pawn",
                "filter": [
                    "chess",
                    "chess-pawn"
                ]
            },
            {
                "name": "Chess Knight",
                "id": "chess-knight",
                "filter": [
                    "chess",
                    "chess-knight"
                ]
            },
            {
                "name": "Chess King",
                "id": "chess-king",
                "filter": [
                    "chess",
                    "chess-king"
                ]
            },
            {
                "name": "Chess Board",
                "id": "chess-board",
                "filter": [
                    "chess",
                    "chess-board"
                ]
            },
            {
                "name": "Chess Bishop",
                "id": "chess-bishop",
                "filter": [
                    "chess",
                    "chess-bishop"
                ]
            },
            {
                "name": "Chess",
                "id": "chess",
                "filter": [
                    "chess",
                    "chess"
                ]
            },
            {
                "name": "Check Square",
                "id": "check-square",
                "filter": [
                    "interfaces",
                    "accept",
                    "agree",
                    "checkmark",
                    "confirm",
                    "correct",
                    "done",
                    "ok",
                    "select",
                    "success",
                    "todo",
                    "yes",
                    "check-square"
                ]
            },
            {
                "name": "Check Double",
                "id": "check-double",
                "filter": [
                    "interfaces",
                    "accept",
                    "agree",
                    "checkmark",
                    "confirm",
                    "correct",
                    "done",
                    "notice",
                    "notification",
                    "notify",
                    "ok",
                    "select",
                    "success",
                    "tick",
                    "todo",
                    "check-double"
                ]
            },
            {
                "name": "Check Circle",
                "id": "check-circle",
                "filter": [
                    "interfaces",
                    "accept",
                    "agree",
                    "confirm",
                    "correct",
                    "done",
                    "ok",
                    "select",
                    "success",
                    "todo",
                    "yes",
                    "check-circle"
                ]
            },
            {
                "name": "Check",
                "id": "check",
                "filter": [
                    "interfaces",
                    "accept",
                    "agree",
                    "checkmark",
                    "confirm",
                    "correct",
                    "done",
                    "notice",
                    "notification",
                    "notify",
                    "ok",
                    "select",
                    "success",
                    "tick",
                    "todo",
                    "yes",
                    "check"
                ]
            },
            {
                "name": "Pie Chart",
                "id": "chart-pie",
                "filter": [
                    "business",
                    "analytics",
                    "graph",
                    "pie-chart",
                    "chart-pie"
                ]
            },
            {
                "name": "Line Chart",
                "id": "chart-line",
                "filter": [
                    "arrows",
                    "business",
                    "activity",
                    "analytics",
                    "dashboard",
                    "graph",
                    "line-chart",
                    "chart-line"
                ]
            },
            {
                "name": "Bar Chart",
                "id": "chart-bar",
                "filter": [
                    "business",
                    "analytics",
                    "bar-chart",
                    "graph",
                    "chart-bar"
                ]
            },
            {
                "name": "Area Chart",
                "id": "chart-area",
                "filter": [
                    "business",
                    "analytics",
                    "area-chart",
                    "graph",
                    "chart-area"
                ]
            },
            {
                "name": "Chalkboard Teacher",
                "id": "chalkboard-teacher",
                "filter": [
                    "users-people",
                    "blackboard",
                    "instructor",
                    "learning",
                    "professor",
                    "school",
                    "whiteboard",
                    "writing",
                    "chalkboard-teacher"
                ]
            },
            {
                "name": "Chalkboard",
                "id": "chalkboard",
                "filter": [
                    "images",
                    "communication",
                    "blackboard",
                    "learning",
                    "school",
                    "teaching",
                    "whiteboard",
                    "writing",
                    "chalkboard"
                ]
            },
            {
                "name": "certificate",
                "id": "certificate",
                "filter": [
                    "spinners",
                    "shapes",
                    "interfaces",
                    "payments-shopping",
                    "business",
                    "badge",
                    "star",
                    "certificate"
                ]
            },
            {
                "name": "Centercode",
                "id": "centercode",
                "filter": [
                    "centercode"
                ]
            },
            {
                "name": "Visa Credit Card",
                "id": "cc-visa",
                "filter": [
                    "payments-shopping",
                    "cc-visa"
                ]
            },
            {
                "name": "Stripe Credit Card",
                "id": "cc-stripe",
                "filter": [
                    "payments-shopping",
                    "cc-stripe"
                ]
            },
            {
                "name": "Paypal Credit Card",
                "id": "cc-paypal",
                "filter": [
                    "payments-shopping",
                    "cc-paypal"
                ]
            },
            {
                "name": "MasterCard Credit Card",
                "id": "cc-mastercard",
                "filter": [
                    "payments-shopping",
                    "cc-mastercard"
                ]
            },
            {
                "name": "JCB Credit Card",
                "id": "cc-jcb",
                "filter": [
                    "payments-shopping",
                    "cc-jcb"
                ]
            },
            {
                "name": "Discover Credit Card",
                "id": "cc-discover",
                "filter": [
                    "payments-shopping",
                    "cc-discover"
                ]
            },
            {
                "name": "Diner's Club Credit Card",
                "id": "cc-diners-club",
                "filter": [
                    "payments-shopping",
                    "cc-diners-club"
                ]
            },
            {
                "name": "Apple Pay Credit Card",
                "id": "cc-apple-pay",
                "filter": [
                    "payments-shopping",
                    "cc-apple-pay"
                ]
            },
            {
                "name": "American Express Credit Card",
                "id": "cc-amex",
                "filter": [
                    "payments-shopping",
                    "amex",
                    "cc-amex"
                ]
            },
            {
                "name": "Amazon Pay Credit Card",
                "id": "cc-amazon-pay",
                "filter": [
                    "payments-shopping",
                    "cc-amazon-pay"
                ]
            },
            {
                "name": "Add to Shopping Cart",
                "id": "cart-plus",
                "filter": [
                    "status",
                    "payments-shopping",
                    "add",
                    "shopping",
                    "cart-plus"
                ]
            },
            {
                "name": "Shopping Cart Arrow Down",
                "id": "cart-arrow-down",
                "filter": [
                    "status",
                    "arrows",
                    "payments-shopping",
                    "shopping",
                    "cart-arrow-down"
                ]
            },
            {
                "name": "Caret Up",
                "id": "caret-up",
                "filter": [
                    "arrows",
                    "arrow",
                    "triangle up",
                    "caret-up"
                ]
            },
            {
                "name": "Caret Square Up",
                "id": "caret-square-up",
                "filter": [
                    "arrows",
                    "caret-square-o-up",
                    "caret-square-up"
                ]
            },
            {
                "name": "Caret Square Right",
                "id": "caret-square-right",
                "filter": [
                    "arrows",
                    "caret-square-o-right",
                    "forward",
                    "next",
                    "caret-square-right"
                ]
            },
            {
                "name": "Caret Square Left",
                "id": "caret-square-left",
                "filter": [
                    "arrows",
                    "back",
                    "caret-square-o-left",
                    "previous",
                    "caret-square-left"
                ]
            },
            {
                "name": "Caret Square Down",
                "id": "caret-square-down",
                "filter": [
                    "arrows",
                    "caret-square-o-down",
                    "dropdown",
                    "menu",
                    "more",
                    "caret-square-down"
                ]
            },
            {
                "name": "Caret Right",
                "id": "caret-right",
                "filter": [
                    "arrows",
                    "arrow",
                    "forward",
                    "next",
                    "triangle right",
                    "caret-right"
                ]
            },
            {
                "name": "Caret Left",
                "id": "caret-left",
                "filter": [
                    "arrows",
                    "arrow",
                    "back",
                    "previous",
                    "triangle left",
                    "caret-left"
                ]
            },
            {
                "name": "Caret Down",
                "id": "caret-down",
                "filter": [
                    "arrows",
                    "arrow",
                    "dropdown",
                    "menu",
                    "more",
                    "triangle down",
                    "caret-down"
                ]
            },
            {
                "name": "Car",
                "id": "car",
                "filter": [
                    "vehicles",
                    "objects",
                    "maps",
                    "machine",
                    "transportation",
                    "vehicle",
                    "car"
                ]
            },
            {
                "name": "Capsules",
                "id": "capsules",
                "filter": [
                    "medical",
                    "drugs",
                    "medicine",
                    "capsules"
                ]
            },
            {
                "name": "Cannabis",
                "id": "cannabis",
                "filter": [
                    "medical",
                    "bud",
                    "chronic",
                    "drugs",
                    "endica",
                    "endo",
                    "ganja",
                    "marijuana",
                    "mary jane",
                    "pot",
                    "reefer",
                    "sativa",
                    "spliff",
                    "weed",
                    "whacky-tabacky",
                    "cannabis"
                ]
            },
            {
                "name": "Retro Camera",
                "id": "camera-retro",
                "filter": [
                    "images",
                    "payments-shopping",
                    "objects",
                    "photo",
                    "picture",
                    "record",
                    "camera-retro"
                ]
            },
            {
                "name": "camera",
                "id": "camera",
                "filter": [
                    "images",
                    "payments-shopping",
                    "objects",
                    "photo",
                    "picture",
                    "record",
                    "camera"
                ]
            },
            {
                "name": "Calendar Times",
                "id": "calendar-times",
                "filter": [
                    "status",
                    "interfaces",
                    "date-time",
                    "calendar-times"
                ]
            },
            {
                "name": "Calendar Plus",
                "id": "calendar-plus",
                "filter": [
                    "status",
                    "interfaces",
                    "date-time",
                    "calendar-plus"
                ]
            },
            {
                "name": "Calendar Minus",
                "id": "calendar-minus",
                "filter": [
                    "status",
                    "interfaces",
                    "date-time",
                    "calendar-minus"
                ]
            },
            {
                "name": "Calendar Check",
                "id": "calendar-check",
                "filter": [
                    "status",
                    "interfaces",
                    "date-time",
                    "accept",
                    "agree",
                    "appointment",
                    "confirm",
                    "correct",
                    "done",
                    "ok",
                    "select",
                    "success",
                    "todo",
                    "calendar-check"
                ]
            },
            {
                "name": "Alternate Calendar",
                "id": "calendar-alt",
                "filter": [
                    "status",
                    "interfaces",
                    "business",
                    "date-time",
                    "objects",
                    "calendar",
                    "date",
                    "event",
                    "schedule",
                    "time",
                    "when",
                    "calendar-alt"
                ]
            },
            {
                "name": "Calendar",
                "id": "calendar",
                "filter": [
                    "status",
                    "shapes",
                    "interfaces",
                    "business",
                    "date-time",
                    "objects",
                    "calendar-o",
                    "date",
                    "event",
                    "schedule",
                    "time",
                    "when",
                    "calendar"
                ]
            },
            {
                "name": "Calculator",
                "id": "calculator",
                "filter": [
                    "interfaces",
                    "business",
                    "objects",
                    "calculator"
                ]
            },
            {
                "name": "BuySellAds",
                "id": "buysellads",
                "filter": [
                    "buysellads"
                ]
            },
            {
                "name": "Bus Alt",
                "id": "bus-alt",
                "filter": [
                    "travel",
                    "machine",
                    "public transportation",
                    "transportation",
                    "vehicle",
                    "bus-alt"
                ]
            },
            {
                "name": "Bus",
                "id": "bus",
                "filter": [
                    "travel",
                    "vehicles",
                    "objects",
                    "machine",
                    "public transportation",
                    "transportation",
                    "vehicle",
                    "bus"
                ]
            },
            {
                "name": "Büromöbel-Experte GmbH & Co. KG.",
                "id": "buromobelexperte",
                "filter": [
                    "buromobelexperte"
                ]
            },
            {
                "name": "Burn",
                "id": "burn",
                "filter": [
                    "medical",
                    "energy",
                    "burn"
                ]
            },
            {
                "name": "Bullseye",
                "id": "bullseye",
                "filter": [
                    "interfaces",
                    "business",
                    "objects",
                    "target",
                    "bullseye"
                ]
            },
            {
                "name": "bullhorn",
                "id": "bullhorn",
                "filter": [
                    "interfaces",
                    "communication",
                    "payments-shopping",
                    "business",
                    "objects",
                    "announcement",
                    "broadcast",
                    "louder",
                    "megaphone",
                    "share",
                    "bullhorn"
                ]
            },
            {
                "name": "Building",
                "id": "building",
                "filter": [
                    "buildings",
                    "business",
                    "objects",
                    "maps",
                    "apartment",
                    "business",
                    "company",
                    "office",
                    "work",
                    "building"
                ]
            },
            {
                "name": "Bug",
                "id": "bug",
                "filter": [
                    "interfaces",
                    "objects",
                    "code",
                    "insect",
                    "report",
                    "bug"
                ]
            },
            {
                "name": "BTC",
                "id": "btc",
                "filter": [
                    "currency",
                    "btc"
                ]
            },
            {
                "name": "Brush",
                "id": "brush",
                "filter": [
                    "design",
                    "bristles",
                    "color",
                    "handle",
                    "painting",
                    "brush"
                ]
            },
            {
                "name": "Broom",
                "id": "broom",
                "filter": [
                    "broom"
                ]
            },
            {
                "name": "Broadcast Tower",
                "id": "broadcast-tower",
                "filter": [
                    "audio-video",
                    "communication",
                    "objects",
                    "airwaves",
                    "radio",
                    "waves",
                    "broadcast-tower"
                ]
            },
            {
                "name": "Medical Briefcase",
                "id": "briefcase-medical",
                "filter": [
                    "medical",
                    "health briefcase",
                    "briefcase-medical"
                ]
            },
            {
                "name": "Briefcase",
                "id": "briefcase",
                "filter": [
                    "business",
                    "objects",
                    "maps",
                    "bag",
                    "business",
                    "luggage",
                    "office",
                    "work",
                    "briefcase"
                ]
            },
            {
                "name": "Braille",
                "id": "braille",
                "filter": [
                    "accessibility",
                    "braille"
                ]
            },
            {
                "name": "Boxes",
                "id": "boxes",
                "filter": [
                    "logistics",
                    "boxes"
                ]
            },
            {
                "name": "Box Open",
                "id": "box-open",
                "filter": [
                    "moving",
                    "box-open"
                ]
            },
            {
                "name": "Box",
                "id": "box",
                "filter": [
                    "logistics",
                    "package",
                    "box"
                ]
            },
            {
                "name": "Bowling Ball",
                "id": "bowling-ball",
                "filter": [
                    "sports",
                    "bowling-ball"
                ]
            },
            {
                "name": "bookmark",
                "id": "bookmark",
                "filter": [
                    "shapes",
                    "writing",
                    "payments-shopping",
                    "objects",
                    "maps",
                    "save",
                    "bookmark"
                ]
            }
        ];
    };
    IconPickerService.prototype.getBsIcons = function () {
        return [
            {
                'id': 'asterisk',
                'name': 'Asterisk'
            },
            {
                'id': 'plus',
                'name': 'Plus'
            },
            {
                'id': 'euro',
                'name': 'Euro'
            },
            {
                'id': 'minus',
                'name': 'Minus'
            },
            {
                'id': 'cloud',
                'name': 'Cloud'
            },
            {
                'id': 'envelope',
                'name': 'Envelope'
            },
            {
                'id': 'pencil',
                'name': 'Pencil'
            },
            {
                'id': 'glass',
                'name': 'Glass'
            },
            {
                'id': 'music',
                'name': 'Music'
            },
            {
                'id': 'search',
                'name': 'Search'
            },
            {
                'id': 'heart',
                'name': 'Heart'
            },
            {
                'id': 'star',
                'name': 'Star'
            },
            {
                'id': 'star-empty',
                'name': 'Star-empty'
            },
            {
                'id': 'user',
                'name': 'User'
            },
            {
                'id': 'film',
                'name': 'Film'
            },
            {
                'id': 'th-large',
                'name': 'Th-large'
            },
            {
                'id': 'th',
                'name': 'Th'
            },
            {
                'id': 'th-list',
                'name': 'Th-list'
            },
            {
                'id': 'ok',
                'name': 'Ok'
            },
            {
                'id': 'remove',
                'name': 'Remove'
            },
            {
                'id': 'zoom-in',
                'name': 'Zoom-in'
            },
            {
                'id': 'zoom-out',
                'name': 'Zoom-out'
            },
            {
                'id': 'off',
                'name': 'Off'
            },
            {
                'id': 'signal',
                'name': 'Signal'
            },
            {
                'id': 'cog',
                'name': 'Cog'
            },
            {
                'id': 'trash',
                'name': 'Trash'
            },
            {
                'id': 'home',
                'name': 'Home'
            },
            {
                'id': 'file',
                'name': 'File'
            },
            {
                'id': 'time',
                'name': 'Time'
            },
            {
                'id': 'road',
                'name': 'Road'
            },
            {
                'id': 'download-alt',
                'name': 'Download-alt'
            },
            {
                'id': 'download',
                'name': 'Download'
            },
            {
                'id': 'upload',
                'name': 'Upload'
            },
            {
                'id': 'inbox',
                'name': 'Inbox'
            },
            {
                'id': 'play-circle',
                'name': 'Play-circle'
            },
            {
                'id': 'repeat',
                'name': 'Repeat'
            },
            {
                'id': 'refresh',
                'name': 'Refresh'
            },
            {
                'id': 'list-alt',
                'name': 'List-alt'
            },
            {
                'id': 'lock',
                'name': 'Lock'
            },
            {
                'id': 'flag',
                'name': 'Flag'
            },
            {
                'id': 'headphones',
                'name': 'Headphones'
            },
            {
                'id': 'volume-off',
                'name': 'Volume-off'
            },
            {
                'id': 'volume-down',
                'name': 'Volume-down'
            },
            {
                'id': 'volume-up',
                'name': 'Volume-up'
            },
            {
                'id': 'qrcode',
                'name': 'Qrcode'
            },
            {
                'id': 'barcode',
                'name': 'Barcode'
            },
            {
                'id': 'tag',
                'name': 'Tag'
            },
            {
                'id': 'tags',
                'name': 'Tags'
            },
            {
                'id': 'book',
                'name': 'Book'
            },
            {
                'id': 'bookmark',
                'name': 'Bookmark'
            },
            {
                'id': 'print',
                'name': 'Print'
            },
            {
                'id': 'camera',
                'name': 'Camera'
            },
            {
                'id': 'font',
                'name': 'Font'
            },
            {
                'id': 'bold',
                'name': 'Bold'
            },
            {
                'id': 'italic',
                'name': 'Italic'
            },
            {
                'id': 'text-height',
                'name': 'Text-height'
            },
            {
                'id': 'text-width',
                'name': 'Text-width'
            },
            {
                'id': 'align-left',
                'name': 'Align-left'
            },
            {
                'id': 'align-center',
                'name': 'Align-center'
            },
            {
                'id': 'align-right',
                'name': 'Align-right'
            },
            {
                'id': 'align-justify',
                'name': 'Align-justify'
            },
            {
                'id': 'list',
                'name': 'List'
            },
            {
                'id': 'indent-left',
                'name': 'Indent-left'
            },
            {
                'id': 'indent-right',
                'name': 'Indent-right'
            },
            {
                'id': 'facetime-video',
                'name': 'Facetime-video'
            },
            {
                'id': 'picture',
                'name': 'Picture'
            },
            {
                'id': 'map-marker',
                'name': 'Map-marker'
            },
            {
                'id': 'adjust',
                'name': 'Adjust'
            },
            {
                'id': 'tint',
                'name': 'Tint'
            },
            {
                'id': 'edit',
                'name': 'Edit'
            },
            {
                'id': 'share',
                'name': 'Share'
            },
            {
                'id': 'check',
                'name': 'Check'
            },
            {
                'id': 'move',
                'name': 'Move'
            },
            {
                'id': 'step-backward',
                'name': 'Step-backward'
            },
            {
                'id': 'fast-backward',
                'name': 'Fast-backward'
            },
            {
                'id': 'backward',
                'name': 'Backward'
            },
            {
                'id': 'play',
                'name': 'Play'
            },
            {
                'id': 'pause',
                'name': 'Pause'
            },
            {
                'id': 'stop',
                'name': 'Stop'
            },
            {
                'id': 'forward',
                'name': 'Forward'
            },
            {
                'id': 'fast-forward',
                'name': 'Fast-forward'
            },
            {
                'id': 'step-forward',
                'name': 'Step-forward'
            },
            {
                'id': 'eject',
                'name': 'Eject'
            },
            {
                'id': 'chevron-left',
                'name': 'Chevron-left'
            },
            {
                'id': 'chevron-right',
                'name': 'Chevron-right'
            },
            {
                'id': 'plus-sign',
                'name': 'Plus-sign'
            },
            {
                'id': 'minus-sign',
                'name': 'Minus-sign'
            },
            {
                'id': 'remove-sign',
                'name': 'Remove-sign'
            },
            {
                'id': 'ok-sign',
                'name': 'Ok-sign'
            },
            {
                'id': 'question-sign',
                'name': 'Question-sign'
            },
            {
                'id': 'info-sign',
                'name': 'Info-sign'
            },
            {
                'id': 'screenshot',
                'name': 'Screenshot'
            },
            {
                'id': 'remove-circle',
                'name': 'Remove-circle'
            },
            {
                'id': 'ok-circle',
                'name': 'Ok-circle'
            },
            {
                'id': 'ban-circle',
                'name': 'Ban-circle'
            },
            {
                'id': 'arrow-left',
                'name': 'Arrow-left'
            },
            {
                'id': 'arrow-right',
                'name': 'Arrow-right'
            },
            {
                'id': 'arrow-up',
                'name': 'Arrow-up'
            },
            {
                'id': 'arrow-down',
                'name': 'Arrow-down'
            },
            {
                'id': 'share-alt',
                'name': 'Share-alt'
            },
            {
                'id': 'resize-full',
                'name': 'Resize-full'
            },
            {
                'id': 'resize-small',
                'name': 'Resize-small'
            },
            {
                'id': 'exclamation-sign',
                'name': 'Exclamation-sign'
            },
            {
                'id': 'gift',
                'name': 'Gift'
            },
            {
                'id': 'leaf',
                'name': 'Leaf'
            },
            {
                'id': 'fire',
                'name': 'Fire'
            },
            {
                'id': 'eye-open',
                'name': 'Eye-open'
            },
            {
                'id': 'eye-close',
                'name': 'Eye-close'
            },
            {
                'id': 'warning-sign',
                'name': 'Warning-sign'
            },
            {
                'id': 'plane',
                'name': 'Plane'
            },
            {
                'id': 'calendar',
                'name': 'Calendar'
            },
            {
                'id': 'random',
                'name': 'Random'
            },
            {
                'id': 'comment',
                'name': 'Comment'
            },
            {
                'id': 'magnet',
                'name': 'Magnet'
            },
            {
                'id': 'chevron-up',
                'name': 'Chevron-up'
            },
            {
                'id': 'chevron-down',
                'name': 'Chevron-down'
            },
            {
                'id': 'retweet',
                'name': 'Retweet'
            },
            {
                'id': 'shopping-cart',
                'name': 'Shopping-cart'
            },
            {
                'id': 'folder-close',
                'name': 'Folder-close'
            },
            {
                'id': 'folder-open',
                'name': 'Folder-open'
            },
            {
                'id': 'resize-vertical',
                'name': 'Resize-vertical'
            },
            {
                'id': 'resize-horizontal',
                'name': 'Resize-horizontal'
            },
            {
                'id': 'hdd',
                'name': 'Hdd'
            },
            {
                'id': 'bullhorn',
                'name': 'Bullhorn'
            },
            {
                'id': 'bell',
                'name': 'Bell'
            },
            {
                'id': 'certificate',
                'name': 'Certificate'
            },
            {
                'id': 'thumbs-up',
                'name': 'Thumbs-up'
            },
            {
                'id': 'thumbs-down',
                'name': 'Thumbs-down'
            },
            {
                'id': 'hand-right',
                'name': 'Hand-right'
            },
            {
                'id': 'hand-left',
                'name': 'Hand-left'
            },
            {
                'id': 'hand-up',
                'name': 'Hand-up'
            },
            {
                'id': 'hand-down',
                'name': 'Hand-down'
            },
            {
                'id': 'circle-arrow-right',
                'name': 'Circle-arrow-right'
            },
            {
                'id': 'circle-arrow-left',
                'name': 'Circle-arrow-left'
            },
            {
                'id': 'circle-arrow-up',
                'name': 'Circle-arrow-up'
            },
            {
                'id': 'circle-arrow-down',
                'name': 'Circle-arrow-down'
            },
            {
                'id': 'globe',
                'name': 'Globe'
            },
            {
                'id': 'wrench',
                'name': 'Wrench'
            },
            {
                'id': 'tasks',
                'name': 'Tasks'
            },
            {
                'id': 'filter',
                'name': 'Filter'
            },
            {
                'id': 'briefcase',
                'name': 'Briefcase'
            },
            {
                'id': 'fullscreen',
                'name': 'Fullscreen'
            },
            {
                'id': 'dashboard',
                'name': 'Dashboard'
            },
            {
                'id': 'paperclip',
                'name': 'Paperclip'
            },
            {
                'id': 'heart-empty',
                'name': 'Heart-empty'
            },
            {
                'id': 'link',
                'name': 'Link'
            },
            {
                'id': 'phone',
                'name': 'Phone'
            },
            {
                'id': 'pushpin',
                'name': 'Pushpin'
            },
            {
                'id': 'usd',
                'name': 'Usd'
            },
            {
                'id': 'gbp',
                'name': 'Gbp'
            },
            {
                'id': 'sort',
                'name': 'Sort'
            },
            {
                'id': 'sort-by-alphabet',
                'name': 'Sort-by-alphabet'
            },
            {
                'id': 'sort-by-alphabet-alt',
                'name': 'Sort-by-alphabet-alt'
            },
            {
                'id': 'sort-by-order',
                'name': 'Sort-by-order'
            },
            {
                'id': 'sort-by-order-alt',
                'name': 'Sort-by-order-alt'
            },
            {
                'id': 'sort-by-attributes',
                'name': 'Sort-by-attributes'
            },
            {
                'id': 'sort-by-attributes-alt',
                'name': 'Sort-by-attributes-alt'
            },
            {
                'id': 'unchecked',
                'name': 'Unchecked'
            },
            {
                'id': 'expand',
                'name': 'Expand'
            },
            {
                'id': 'collapse-down',
                'name': 'Collapse-down'
            },
            {
                'id': 'collapse-up',
                'name': 'Collapse-up'
            },
            {
                'id': 'log-in',
                'name': 'Log-in'
            },
            {
                'id': 'flash',
                'name': 'Flash'
            },
            {
                'id': 'log-out',
                'name': 'Log-out'
            },
            {
                'id': 'new-window',
                'name': 'New-window'
            },
            {
                'id': 'record',
                'name': 'Record'
            },
            {
                'id': 'save',
                'name': 'Save'
            },
            {
                'id': 'open',
                'name': 'Open'
            },
            {
                'id': 'saved',
                'name': 'Saved'
            },
            {
                'id': 'import',
                'name': 'Import'
            },
            {
                'id': 'export',
                'name': 'Export'
            },
            {
                'id': 'send',
                'name': 'Send'
            },
            {
                'id': 'floppy-disk',
                'name': 'Floppy-disk'
            },
            {
                'id': 'floppy-saved',
                'name': 'Floppy-saved'
            },
            {
                'id': 'floppy-remove',
                'name': 'Floppy-remove'
            },
            {
                'id': 'floppy-save',
                'name': 'Floppy-save'
            },
            {
                'id': 'floppy-open',
                'name': 'Floppy-open'
            },
            {
                'id': 'credit-card',
                'name': 'Credit-card'
            },
            {
                'id': 'transfer',
                'name': 'Transfer'
            },
            {
                'id': 'cutlery',
                'name': 'Cutlery'
            },
            {
                'id': 'header',
                'name': 'Header'
            },
            {
                'id': 'compressed',
                'name': 'Compressed'
            },
            {
                'id': 'earphone',
                'name': 'Earphone'
            },
            {
                'id': 'phone-alt',
                'name': 'Phone-alt'
            },
            {
                'id': 'tower',
                'name': 'Tower'
            },
            {
                'id': 'stats',
                'name': 'Stats'
            },
            {
                'id': 'sd-video',
                'name': 'Sd-video'
            },
            {
                'id': 'hd-video',
                'name': 'Hd-video'
            },
            {
                'id': 'subtitles',
                'name': 'Subtitles'
            },
            {
                'id': 'sound-stereo',
                'name': 'Sound-stereo'
            },
            {
                'id': 'sound-dolby',
                'name': 'Sound-dolby'
            },
            {
                'id': 'sound-5-1',
                'name': 'Sound-5-1'
            },
            {
                'id': 'sound-6-1',
                'name': 'Sound-6-1'
            },
            {
                'id': 'sound-7-1',
                'name': 'Sound-7-1'
            },
            {
                'id': 'copyright-mark',
                'name': 'Copyright-mark'
            },
            {
                'id': 'registration-mark',
                'name': 'Registration-mark'
            },
            {
                'id': 'cloud-download',
                'name': 'Cloud-download'
            },
            {
                'id': 'cloud-upload',
                'name': 'Cloud-upload'
            },
            {
                'id': 'tree-conifer',
                'name': 'Tree-conifer'
            },
            {
                'id': 'tree-deciduous',
                'name': 'Tree-deciduous'
            }
        ];
    };
    return IconPickerService;
}());
IconPickerService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
IconPickerService.ctorParameters = function () { return []; };
exports.IconPickerService = IconPickerService;
//# sourceMappingURL=icon-picker.service.js.map