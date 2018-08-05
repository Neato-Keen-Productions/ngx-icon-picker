import { Injectable } from '@angular/core';
import { Icon, IconType } from './icon';

@Injectable()
export class IconPickerService {


  getIcons(ipIconPack: string): Icon[] {
    let icons: Icon[] = [];

    if (ipIconPack === 'fa' || ipIconPack === 'all') {
      const faIcons = this.getFaIcons().map(icon => {
        icon.type = IconType.FONT_AWESEOME;
        return icon;
      });
      icons = icons.concat(faIcons);
    }

    if (ipIconPack === 'bs' || ipIconPack === 'all') {
      const bsIcons = this.getBsIcons().map(icon => {
        icon.type = IconType.BOOTSTRAP;
        return icon;
      });
      icons = icons.concat(bsIcons);
    }

    return icons;
  }

  private getFaIcons(): Icon[] {
    return [
      {
        "name": "Zhihu",
        "id": "zhihu",
        "filter": [
          "zhihu"
        ],
        "prefix": "fab"
      },
      {
        "name": "YouTube Square",
        "id": "youtube-square",
        "filter": [
          "youtube-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "YouTube",
        "id": "youtube",
        "filter": [
          "film",
          "video",
          "youtube-play",
          "youtube-square",
          "audio-video",
          "youtube"
        ],
        "prefix": "fab"
      },
      {
        "name": "Yoast",
        "id": "yoast",
        "filter": [
          "yoast"
        ],
        "prefix": "fab"
      },
      {
        "name": "Yen Sign",
        "id": "yen-sign",
        "filter": [
          "jpy",
          "jpy",
          "currency",
          "yen-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Yelp",
        "id": "yelp",
        "filter": [
          "yelp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Yandex International",
        "id": "yandex-international",
        "filter": [
          "yandex-international"
        ],
        "prefix": "fab"
      },
      {
        "name": "Yandex",
        "id": "yandex",
        "filter": [
          "yandex"
        ],
        "prefix": "fab"
      },
      {
        "name": "Yahoo Logo",
        "id": "yahoo",
        "filter": [
          "yahoo"
        ],
        "prefix": "fab"
      },
      {
        "name": "Y Combinator",
        "id": "y-combinator",
        "filter": [
          "y-combinator"
        ],
        "prefix": "fab"
      },
      {
        "name": "Xing Square",
        "id": "xing-square",
        "filter": [
          "xing-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Xing",
        "id": "xing",
        "filter": [
          "xing"
        ],
        "prefix": "fab"
      },
      {
        "name": "Xbox",
        "id": "xbox",
        "filter": [
          "xbox"
        ],
        "prefix": "fab"
      },
      {
        "name": "X-Ray",
        "id": "x-ray",
        "filter": [
          "radiological images",
          "radiology",
          "medical",
          "x-ray"
        ],
        "prefix": "fas"
      },
      {
        "name": "Wrench",
        "id": "wrench",
        "filter": [
          "fix",
          "settings",
          "spanner",
          "tool",
          "update",
          "interfaces",
          "editors",
          "objects",
          "maps",
          "wrench"
        ],
        "prefix": "fas"
      },
      {
        "name": "WPForms",
        "id": "wpforms",
        "filter": [
          "wpforms"
        ],
        "prefix": "fab"
      },
      {
        "name": "WPExplorer",
        "id": "wpexplorer",
        "filter": [
          "wpexplorer"
        ],
        "prefix": "fab"
      },
      {
        "name": "WPBeginner",
        "id": "wpbeginner",
        "filter": [
          "wpbeginner"
        ],
        "prefix": "fab"
      },
      {
        "name": "Wordpress Simple",
        "id": "wordpress-simple",
        "filter": [
          "wordpress-simple"
        ],
        "prefix": "fab"
      },
      {
        "name": "WordPress Logo",
        "id": "wordpress",
        "filter": [
          "wordpress"
        ],
        "prefix": "fab"
      },
      {
        "name": "Won Sign",
        "id": "won-sign",
        "filter": [
          "krw",
          "krw",
          "currency",
          "won-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Wolf Pack-battalion",
        "id": "wolf-pack-battalion",
        "filter": [
          "wolf-pack-battalion"
        ],
        "prefix": "fab"
      },
      {
        "name": "Wix",
        "id": "wix",
        "filter": [
          "wix"
        ],
        "prefix": "fab"
      },
      {
        "name": "Wine Glass-alt",
        "id": "wine-glass-alt",
        "filter": [
          "travel",
          "wine-glass-alt"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Windows",
        "id": "windows",
        "filter": [
          "microsoft",
          "windows"
        ],
        "prefix": "fab"
      },
      {
        "name": "Window Restore",
        "id": "window-restore",
        "filter": [
          "code",
          "window-restore"
        ],
        "prefix": "fas"
      },
      {
        "name": "Window Minimize",
        "id": "window-minimize",
        "filter": [
          "code",
          "window-minimize"
        ],
        "prefix": "fas"
      },
      {
        "name": "Window Maximize",
        "id": "window-maximize",
        "filter": [
          "code",
          "window-maximize"
        ],
        "prefix": "fas"
      },
      {
        "name": "Window Close",
        "id": "window-close",
        "filter": [
          "code",
          "window-close"
        ],
        "prefix": "fas"
      },
      {
        "name": "Wikipedia W",
        "id": "wikipedia-w",
        "filter": [
          "wikipedia-w"
        ],
        "prefix": "fab"
      },
      {
        "name": "WiFi",
        "id": "wifi",
        "filter": [
          "interfaces",
          "communication",
          "maps",
          "wifi"
        ],
        "prefix": "fas"
      },
      {
        "name": "WHMCS",
        "id": "whmcs",
        "filter": [
          "whmcs"
        ],
        "prefix": "fab"
      },
      {
        "name": "Wheelchair",
        "id": "wheelchair",
        "filter": [
          "handicap",
          "person",
          "users-people",
          "vehicles",
          "health",
          "accessibility",
          "objects",
          "maps",
          "wheelchair"
        ],
        "prefix": "fas"
      },
      {
        "name": "What's App Square",
        "id": "whatsapp-square",
        "filter": [
          "whatsapp-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "What's App",
        "id": "whatsapp",
        "filter": [
          "whatsapp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Weixin (WeChat)",
        "id": "weixin",
        "filter": [
          "weixin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hanging Weight",
        "id": "weight-hanging",
        "filter": [
          "anvil",
          "heavy",
          "measurement",
          "weight-hanging"
        ],
        "prefix": "fas"
      },
      {
        "name": "Weight",
        "id": "weight",
        "filter": [
          "measurement",
          "scale",
          "weight",
          "medical",
          "objects"
        ],
        "prefix": "fas"
      },
      {
        "name": "Weibo",
        "id": "weibo",
        "filter": [
          "weibo"
        ],
        "prefix": "fab"
      },
      {
        "name": "Weebly",
        "id": "weebly",
        "filter": [
          "weebly"
        ],
        "prefix": "fab"
      },
      {
        "name": "Warehouse",
        "id": "warehouse",
        "filter": [
          "logistics",
          "warehouse"
        ],
        "prefix": "fas"
      },
      {
        "name": "Wallet",
        "id": "wallet",
        "filter": [
          "business",
          "objects",
          "wallet"
        ],
        "prefix": "fas"
      },
      {
        "name": "Walking",
        "id": "walking",
        "filter": [
          "walking"
        ],
        "prefix": "fas"
      },
      {
        "name": "Vue.js",
        "id": "vuejs",
        "filter": [
          "vuejs"
        ],
        "prefix": "fab"
      },
      {
        "name": "volume-up",
        "id": "volume-up",
        "filter": [
          "audio",
          "higher",
          "louder",
          "music",
          "sound",
          "speaker",
          "audio-video",
          "volume-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "volume-off",
        "id": "volume-off",
        "filter": [
          "audio",
          "music",
          "mute",
          "sound",
          "audio-video",
          "volume-off"
        ],
        "prefix": "fas"
      },
      {
        "name": "volume-down",
        "id": "volume-down",
        "filter": [
          "audio",
          "lower",
          "music",
          "quieter",
          "sound",
          "speaker",
          "audio-video",
          "volume-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Volleyball Ball",
        "id": "volleyball-ball",
        "filter": [
          "sports",
          "volleyball-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "VNV",
        "id": "vnv",
        "filter": [
          "vnv"
        ],
        "prefix": "fab"
      },
      {
        "name": "VK",
        "id": "vk",
        "filter": [
          "vk"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vine",
        "id": "vine",
        "filter": [
          "vine"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vimeo",
        "id": "vimeo-v",
        "filter": [
          "vimeo",
          "vimeo-v"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vimeo Square",
        "id": "vimeo-square",
        "filter": [
          "vimeo-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vimeo",
        "id": "vimeo",
        "filter": [
          "vimeo"
        ],
        "prefix": "fab"
      },
      {
        "name": "Video Slash",
        "id": "video-slash",
        "filter": [
          "chat",
          "video-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Video",
        "id": "video",
        "filter": [
          "camera",
          "film",
          "movie",
          "record",
          "video-camera",
          "chat",
          "audio-video",
          "video"
        ],
        "prefix": "fas"
      },
      {
        "name": "Viber",
        "id": "viber",
        "filter": [
          "viber"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vials",
        "id": "vials",
        "filter": [
          "lab results",
          "test tubes",
          "medical",
          "vials"
        ],
        "prefix": "fas"
      },
      {
        "name": "Vial",
        "id": "vial",
        "filter": [
          "test tube",
          "medical",
          "vial"
        ],
        "prefix": "fas"
      },
      {
        "name": "Viadeo Square",
        "id": "viadeo-square",
        "filter": [
          "viadeo-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Viadeo",
        "id": "viadeo",
        "filter": [
          "viadeo"
        ],
        "prefix": "fab"
      },
      {
        "name": "Viacoin",
        "id": "viacoin",
        "filter": [
          "viacoin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Venus Mars",
        "id": "venus-mars",
        "filter": [
          "gender",
          "venus-mars"
        ],
        "prefix": "fas"
      },
      {
        "name": "Venus Double",
        "id": "venus-double",
        "filter": [
          "gender",
          "venus-double"
        ],
        "prefix": "fas"
      },
      {
        "name": "Venus",
        "id": "venus",
        "filter": [
          "female",
          "gender",
          "venus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Vector Square",
        "id": "vector-square",
        "filter": [
          "anchors",
          "lines",
          "object",
          "design",
          "vector-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Vaadin",
        "id": "vaadin",
        "filter": [
          "vaadin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Utensils",
        "id": "utensils",
        "filter": [
          "cutlery",
          "dinner",
          "eat",
          "food",
          "knife",
          "restaurant",
          "spoon",
          "objects",
          "maps",
          "utensils"
        ],
        "prefix": "fas"
      },
      {
        "name": "Utensil Spoon",
        "id": "utensil-spoon",
        "filter": [
          "spoon",
          "objects",
          "maps",
          "utensil-spoon"
        ],
        "prefix": "fas"
      },
      {
        "name": "us-Sunnah Foundation",
        "id": "ussunnah",
        "filter": [
          "ussunnah"
        ],
        "prefix": "fab"
      },
      {
        "name": "Users Cog",
        "id": "users-cog",
        "filter": [
          "users-cog"
        ],
        "prefix": "fas"
      },
      {
        "name": "Users",
        "id": "users",
        "filter": [
          "people",
          "persons",
          "profiles",
          "users-people",
          "users"
        ],
        "prefix": "fas"
      },
      {
        "name": "Remove User",
        "id": "user-times",
        "filter": [
          "users-people",
          "user-times"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Tie",
        "id": "user-tie",
        "filter": [
          "avatar",
          "business",
          "clothing",
          "formal",
          "users-people",
          "user-tie"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Tag",
        "id": "user-tag",
        "filter": [
          "users-people",
          "user-tag"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Slash",
        "id": "user-slash",
        "filter": [
          "users-people",
          "user-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Shield",
        "id": "user-shield",
        "filter": [
          "users-people",
          "user-shield"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Secret",
        "id": "user-secret",
        "filter": [
          "clothing",
          "coat",
          "hat",
          "incognito",
          "privacy",
          "spy",
          "whisper",
          "users-people",
          "code",
          "user-secret"
        ],
        "prefix": "fas"
      },
      {
        "name": "Add User",
        "id": "user-plus",
        "filter": [
          "sign up",
          "signup",
          "users-people",
          "user-plus"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Ninja",
        "id": "user-ninja",
        "filter": [
          "assassin",
          "avatar",
          "dangerous",
          "sneaky",
          "users-people",
          "user-ninja"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Minus",
        "id": "user-minus",
        "filter": [
          "users-people",
          "user-minus"
        ],
        "prefix": "fas"
      },
      {
        "name": "user-md",
        "id": "user-md",
        "filter": [
          "doctor",
          "job",
          "medical",
          "nurse",
          "occupation",
          "profile",
          "users-people",
          "health",
          "user-md"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Lock",
        "id": "user-lock",
        "filter": [
          "users-people",
          "user-lock"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Graduate",
        "id": "user-graduate",
        "filter": [
          "cap",
          "clothing",
          "commencement",
          "gown",
          "graduation",
          "student",
          "users-people",
          "education",
          "user-graduate"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Friends",
        "id": "user-friends",
        "filter": [
          "users-people",
          "user-friends"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Edit",
        "id": "user-edit",
        "filter": [
          "users-people",
          "user-edit"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Cog",
        "id": "user-cog",
        "filter": [
          "users-people",
          "user-cog"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Clock",
        "id": "user-clock",
        "filter": [
          "users-people",
          "user-clock"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Circle",
        "id": "user-circle",
        "filter": [
          "account",
          "avatar",
          "head",
          "man",
          "person",
          "profile",
          "users-people",
          "interfaces",
          "user-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Check",
        "id": "user-check",
        "filter": [
          "users-people",
          "user-check"
        ],
        "prefix": "fas"
      },
      {
        "name": "User Astronaut",
        "id": "user-astronaut",
        "filter": [
          "avatar",
          "clothing",
          "cosmonaut",
          "space",
          "suit",
          "users-people",
          "user-astronaut"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate User Slash",
        "id": "user-alt-slash",
        "filter": [
          "users-people",
          "user-alt-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate User",
        "id": "user-alt",
        "filter": [
          "account",
          "avatar",
          "head",
          "man",
          "person",
          "profile",
          "users-people",
          "interfaces",
          "user-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "User",
        "id": "user",
        "filter": [
          "account",
          "avatar",
          "head",
          "man",
          "person",
          "profile",
          "users-people",
          "interfaces",
          "user"
        ],
        "prefix": "fas"
      },
      {
        "name": "USB",
        "id": "usb",
        "filter": [
          "usb"
        ],
        "prefix": "fab"
      },
      {
        "name": "Upload",
        "id": "upload",
        "filter": [
          "export",
          "publish",
          "computers",
          "arrows",
          "interfaces",
          "upload"
        ],
        "prefix": "fas"
      },
      {
        "name": "Untappd",
        "id": "untappd",
        "filter": [
          "untappd"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Unlock",
        "id": "unlock-alt",
        "filter": [
          "admin",
          "lock",
          "password",
          "protect",
          "status",
          "objects",
          "unlock-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "unlock",
        "id": "unlock",
        "filter": [
          "admin",
          "lock",
          "password",
          "protect",
          "status",
          "objects",
          "unlock"
        ],
        "prefix": "fas"
      },
      {
        "name": "unlink",
        "id": "unlink",
        "filter": [
          "chain",
          "chain-broken",
          "remove",
          "editors",
          "unlink"
        ],
        "prefix": "fas"
      },
      {
        "name": "University",
        "id": "university",
        "filter": [
          "bank",
          "institution",
          "buildings",
          "objects",
          "maps",
          "university"
        ],
        "prefix": "fas"
      },
      {
        "name": "Universal Access",
        "id": "universal-access",
        "filter": [
          "accessibility",
          "universal-access"
        ],
        "prefix": "fas"
      },
      {
        "name": "Uniregistry",
        "id": "uniregistry",
        "filter": [
          "uniregistry"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Undo",
        "id": "undo-alt",
        "filter": [
          "back",
          "control z",
          "exchange",
          "oops",
          "return",
          "swap",
          "arrows",
          "audio-video",
          "interfaces",
          "editors",
          "undo-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Undo",
        "id": "undo",
        "filter": [
          "back",
          "control z",
          "exchange",
          "oops",
          "return",
          "rotate",
          "swap",
          "arrows",
          "audio-video",
          "interfaces",
          "editors",
          "undo"
        ],
        "prefix": "fas"
      },
      {
        "name": "Underline",
        "id": "underline",
        "filter": [
          "editors",
          "underline"
        ],
        "prefix": "fas"
      },
      {
        "name": "Umbrella Beach",
        "id": "umbrella-beach",
        "filter": [
          "protection",
          "recreation",
          "sun",
          "travel",
          "umbrella-beach"
        ],
        "prefix": "fas"
      },
      {
        "name": "Umbrella",
        "id": "umbrella",
        "filter": [
          "protection",
          "rain",
          "objects",
          "maps",
          "umbrella"
        ],
        "prefix": "fas"
      },
      {
        "name": "UIkit",
        "id": "uikit",
        "filter": [
          "uikit"
        ],
        "prefix": "fab"
      },
      {
        "name": "Uber",
        "id": "uber",
        "filter": [
          "uber"
        ],
        "prefix": "fab"
      },
      {
        "name": "Typo3",
        "id": "typo3",
        "filter": [
          "typo3"
        ],
        "prefix": "fab"
      },
      {
        "name": "Twitter Square",
        "id": "twitter-square",
        "filter": [
          "social network",
          "tweet",
          "twitter-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Twitter",
        "id": "twitter",
        "filter": [
          "social network",
          "tweet",
          "twitter"
        ],
        "prefix": "fab"
      },
      {
        "name": "Twitch",
        "id": "twitch",
        "filter": [
          "twitch"
        ],
        "prefix": "fab"
      },
      {
        "name": "Television",
        "id": "tv",
        "filter": [
          "computer",
          "display",
          "monitor",
          "television",
          "computers",
          "objects",
          "tv"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tumblr Square",
        "id": "tumblr-square",
        "filter": [
          "tumblr-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Tumblr",
        "id": "tumblr",
        "filter": [
          "tumblr"
        ],
        "prefix": "fab"
      },
      {
        "name": "TTY",
        "id": "tty",
        "filter": [
          "communication",
          "accessibility",
          "maps",
          "tty"
        ],
        "prefix": "fas"
      },
      {
        "name": "T-Shirt",
        "id": "tshirt",
        "filter": [
          "cloth",
          "clothing",
          "tshirt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Truck Side",
        "id": "truck-pickup",
        "filter": [
          "vehicles",
          "automotive",
          "truck-pickup"
        ],
        "prefix": "fas"
      },
      {
        "name": "Truck Moving",
        "id": "truck-moving",
        "filter": [
          "moving",
          "truck-moving"
        ],
        "prefix": "fas"
      },
      {
        "name": "Truck Monster",
        "id": "truck-monster",
        "filter": [
          "vehicles",
          "automotive",
          "truck-monster"
        ],
        "prefix": "fas"
      },
      {
        "name": "Truck Loading",
        "id": "truck-loading",
        "filter": [
          "moving",
          "truck-loading"
        ],
        "prefix": "fas"
      },
      {
        "name": "truck",
        "id": "truck",
        "filter": [
          "delivery",
          "shipping",
          "logistics",
          "vehicles",
          "automotive",
          "objects",
          "maps",
          "truck"
        ],
        "prefix": "fas"
      },
      {
        "name": "trophy",
        "id": "trophy",
        "filter": [
          "achievement",
          "award",
          "cup",
          "game",
          "winner",
          "interfaces",
          "payments-shopping",
          "objects",
          "maps",
          "trophy"
        ],
        "prefix": "fas"
      },
      {
        "name": "TripAdvisor",
        "id": "tripadvisor",
        "filter": [
          "tripadvisor"
        ],
        "prefix": "fab"
      },
      {
        "name": "Trello",
        "id": "trello",
        "filter": [
          "trello"
        ],
        "prefix": "fab"
      },
      {
        "name": "Tree",
        "id": "tree",
        "filter": [
          "objects",
          "maps",
          "tree"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Trash",
        "id": "trash-alt",
        "filter": [
          "delete",
          "garbage",
          "hide",
          "remove",
          "trash",
          "trash-o",
          "interfaces",
          "editors",
          "objects",
          "trash-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Trash",
        "id": "trash",
        "filter": [
          "delete",
          "garbage",
          "hide",
          "remove",
          "interfaces",
          "editors",
          "objects",
          "trash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Transgender",
        "id": "transgender-alt",
        "filter": [
          "gender",
          "transgender-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Transgender",
        "id": "transgender",
        "filter": [
          "intersex",
          "gender",
          "transgender"
        ],
        "prefix": "fas"
      },
      {
        "name": "Train",
        "id": "train",
        "filter": [
          "bullet",
          "locomotive",
          "railway",
          "vehicles",
          "objects",
          "maps",
          "train"
        ],
        "prefix": "fas"
      },
      {
        "name": "Traffic Light",
        "id": "traffic-light",
        "filter": [
          "maps",
          "traffic-light"
        ],
        "prefix": "fas"
      },
      {
        "name": "Trademark",
        "id": "trademark",
        "filter": [
          "business",
          "trademark"
        ],
        "prefix": "fas"
      },
      {
        "name": "Trade Federation",
        "id": "trade-federation",
        "filter": [
          "trade-federation"
        ],
        "prefix": "fab"
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
          "medical",
          "tooth"
        ],
        "prefix": "fas"
      },
      {
        "name": "Toolbox",
        "id": "toolbox",
        "filter": [
          "admin",
          "container",
          "fix",
          "repair",
          "settings",
          "tools",
          "objects",
          "toolbox"
        ],
        "prefix": "fas"
      },
      {
        "name": "Toggle On",
        "id": "toggle-on",
        "filter": [
          "switch",
          "status",
          "interfaces",
          "toggle-on"
        ],
        "prefix": "fas"
      },
      {
        "name": "Toggle Off",
        "id": "toggle-off",
        "filter": [
          "switch",
          "status",
          "interfaces",
          "toggle-off"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tired Face",
        "id": "tired",
        "filter": [
          "emoticon",
          "face",
          "grumpy",
          "emoji",
          "tired"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tint Slash",
        "id": "tint-slash",
        "filter": [
          "design",
          "tint-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "tint",
        "id": "tint",
        "filter": [
          "drop",
          "droplet",
          "raindrop",
          "waterdrop",
          "images",
          "design",
          "maps",
          "tint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Times Circle",
        "id": "times-circle",
        "filter": [
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
          "interfaces",
          "times-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Times",
        "id": "times",
        "filter": [
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
          "mathematics",
          "interfaces",
          "times"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Ticket",
        "id": "ticket-alt",
        "filter": [
          "ticket",
          "objects",
          "maps",
          "ticket-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thumbtack",
        "id": "thumbtack",
        "filter": [
          "coordinates",
          "location",
          "marker",
          "pin",
          "thumb-tack",
          "writing",
          "business",
          "objects",
          "maps",
          "thumbtack"
        ],
        "prefix": "fas"
      },
      {
        "name": "thumbs-up",
        "id": "thumbs-up",
        "filter": [
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
          "status",
          "hands",
          "interfaces",
          "payments-shopping",
          "thumbs-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "thumbs-down",
        "id": "thumbs-down",
        "filter": [
          "disagree",
          "disapprove",
          "dislike",
          "hand",
          "thumbs-o-down",
          "status",
          "hands",
          "interfaces",
          "payments-shopping",
          "thumbs-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer 3/4 Full",
        "id": "thermometer-three-quarters",
        "filter": [
          "status",
          "thermometer-three-quarters"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer 1/4 Full",
        "id": "thermometer-quarter",
        "filter": [
          "status",
          "thermometer-quarter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer 1/2 Full",
        "id": "thermometer-half",
        "filter": [
          "status",
          "thermometer-half"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer Full",
        "id": "thermometer-full",
        "filter": [
          "status",
          "thermometer-full"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer Empty",
        "id": "thermometer-empty",
        "filter": [
          "status",
          "thermometer-empty"
        ],
        "prefix": "fas"
      },
      {
        "name": "Thermometer",
        "id": "thermometer",
        "filter": [
          "fever",
          "temperature",
          "medical",
          "thermometer"
        ],
        "prefix": "fas"
      },
      {
        "name": "ThemeIsle",
        "id": "themeisle",
        "filter": [
          "themeisle"
        ],
        "prefix": "fab"
      },
      {
        "name": "Themeco",
        "id": "themeco",
        "filter": [
          "themeco"
        ],
        "prefix": "fab"
      },
      {
        "name": "Theater Masks",
        "id": "theater-masks",
        "filter": [
          "education",
          "theater-masks"
        ],
        "prefix": "fas"
      },
      {
        "name": "th-list",
        "id": "th-list",
        "filter": [
          "checklist",
          "completed",
          "done",
          "finished",
          "ol",
          "todo",
          "ul",
          "editors",
          "th-list"
        ],
        "prefix": "fas"
      },
      {
        "name": "th-large",
        "id": "th-large",
        "filter": [
          "blocks",
          "boxes",
          "grid",
          "squares",
          "editors",
          "th-large"
        ],
        "prefix": "fas"
      },
      {
        "name": "th",
        "id": "th",
        "filter": [
          "blocks",
          "boxes",
          "grid",
          "squares",
          "editors",
          "th"
        ],
        "prefix": "fas"
      },
      {
        "name": "text-width",
        "id": "text-width",
        "filter": [
          "arrows",
          "editors",
          "text-width"
        ],
        "prefix": "fas"
      },
      {
        "name": "text-height",
        "id": "text-height",
        "filter": [
          "arrows",
          "editors",
          "text-height"
        ],
        "prefix": "fas"
      },
      {
        "name": "Terminal",
        "id": "terminal",
        "filter": [
          "code",
          "command",
          "console",
          "prompt",
          "terminal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tencent Weibo",
        "id": "tencent-weibo",
        "filter": [
          "tencent-weibo"
        ],
        "prefix": "fab"
      },
      {
        "name": "Telegram Plane",
        "id": "telegram-plane",
        "filter": [
          "telegram-plane"
        ],
        "prefix": "fab"
      },
      {
        "name": "Telegram",
        "id": "telegram",
        "filter": [
          "telegram"
        ],
        "prefix": "fab"
      },
      {
        "name": "Teeth Open",
        "id": "teeth-open",
        "filter": [
          "medical",
          "teeth-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "Teeth",
        "id": "teeth",
        "filter": [
          "medical",
          "teeth"
        ],
        "prefix": "fas"
      },
      {
        "name": "TeamSpeak",
        "id": "teamspeak",
        "filter": [
          "teamspeak"
        ],
        "prefix": "fab"
      },
      {
        "name": "Taxi",
        "id": "taxi",
        "filter": [
          "cab",
          "cabbie",
          "car",
          "car service",
          "lyft",
          "machine",
          "transportation",
          "uber",
          "vehicle",
          "travel",
          "vehicles",
          "automotive",
          "objects",
          "maps",
          "taxi"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tasks",
        "id": "tasks",
        "filter": [
          "downloading",
          "downloads",
          "loading",
          "progress",
          "settings",
          "editors",
          "business",
          "tasks"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tape",
        "id": "tape",
        "filter": [
          "moving",
          "tape"
        ],
        "prefix": "fas"
      },
      {
        "name": "tags",
        "id": "tags",
        "filter": [
          "labels",
          "payments-shopping",
          "business",
          "objects",
          "maps",
          "tags"
        ],
        "prefix": "fas"
      },
      {
        "name": "tag",
        "id": "tag",
        "filter": [
          "label",
          "payments-shopping",
          "business",
          "objects",
          "maps",
          "tag"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Tachometer",
        "id": "tachometer-alt",
        "filter": [
          "dashboard",
          "tachometer",
          "automotive",
          "objects",
          "tachometer-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Tablets",
        "id": "tablets",
        "filter": [
          "drugs",
          "medicine",
          "medical",
          "tablets"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Tablet",
        "id": "tablet-alt",
        "filter": [
          "apple",
          "device",
          "ipad",
          "kindle",
          "screen",
          "computers",
          "objects",
          "tablet-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "tablet",
        "id": "tablet",
        "filter": [
          "apple",
          "device",
          "ipad",
          "kindle",
          "screen",
          "computers",
          "objects",
          "tablet"
        ],
        "prefix": "fas"
      },
      {
        "name": "Table Tennis",
        "id": "table-tennis",
        "filter": [
          "sports",
          "table-tennis"
        ],
        "prefix": "fas"
      },
      {
        "name": "table",
        "id": "table",
        "filter": [
          "data",
          "excel",
          "spreadsheet",
          "editors",
          "business",
          "table"
        ],
        "prefix": "fas"
      },
      {
        "name": "Syringe",
        "id": "syringe",
        "filter": [
          "immunizations",
          "needle",
          "medical",
          "syringe"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Sync",
        "id": "sync-alt",
        "filter": [
          "refresh",
          "reload",
          "rotate",
          "arrows",
          "audio-video",
          "interfaces",
          "editors",
          "sync-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sync",
        "id": "sync",
        "filter": [
          "exchange",
          "refresh",
          "reload",
          "rotate",
          "swap",
          "arrows",
          "audio-video",
          "spinners",
          "interfaces",
          "editors",
          "sync"
        ],
        "prefix": "fas"
      },
      {
        "name": "Swimming Pool",
        "id": "swimming-pool",
        "filter": [
          "ladder",
          "recreation",
          "water",
          "travel",
          "swimming-pool"
        ],
        "prefix": "fas"
      },
      {
        "name": "Swimmer",
        "id": "swimmer",
        "filter": [
          "athlete",
          "head",
          "man",
          "person",
          "water",
          "travel",
          "swimmer"
        ],
        "prefix": "fas"
      },
      {
        "name": "Swatchbook",
        "id": "swatchbook",
        "filter": [
          "design",
          "swatchbook"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hushed Face",
        "id": "surprise",
        "filter": [
          "emoticon",
          "face",
          "shocked",
          "emoji",
          "surprise"
        ],
        "prefix": "fas"
      },
      {
        "name": "Supple",
        "id": "supple",
        "filter": [
          "supple"
        ],
        "prefix": "fab"
      },
      {
        "name": "superscript",
        "id": "superscript",
        "filter": [
          "exponential",
          "mathematics",
          "editors",
          "superscript"
        ],
        "prefix": "fas"
      },
      {
        "name": "Superpowers",
        "id": "superpowers",
        "filter": [
          "superpowers"
        ],
        "prefix": "fab"
      },
      {
        "name": "Sun",
        "id": "sun",
        "filter": [
          "brighten",
          "contrast",
          "day",
          "lighter",
          "weather",
          "spinners",
          "objects",
          "sun"
        ],
        "prefix": "fas"
      },
      {
        "name": "Suitcase Rolling",
        "id": "suitcase-rolling",
        "filter": [
          "travel",
          "suitcase-rolling"
        ],
        "prefix": "fas"
      },
      {
        "name": "Suitcase",
        "id": "suitcase",
        "filter": [
          "baggage",
          "luggage",
          "move",
          "suitcase",
          "travel",
          "trip",
          "moving",
          "business",
          "objects",
          "maps"
        ],
        "prefix": "fas"
      },
      {
        "name": "Subway",
        "id": "subway",
        "filter": [
          "machine",
          "railway",
          "train",
          "transportation",
          "vehicle",
          "vehicles",
          "objects",
          "maps",
          "subway"
        ],
        "prefix": "fas"
      },
      {
        "name": "subscript",
        "id": "subscript",
        "filter": [
          "mathematics",
          "editors",
          "subscript"
        ],
        "prefix": "fas"
      },
      {
        "name": "StumbleUpon Circle",
        "id": "stumbleupon-circle",
        "filter": [
          "stumbleupon-circle"
        ],
        "prefix": "fab"
      },
      {
        "name": "StumbleUpon Logo",
        "id": "stumbleupon",
        "filter": [
          "stumbleupon"
        ],
        "prefix": "fab"
      },
      {
        "name": "Studio Vinari",
        "id": "studiovinari",
        "filter": [
          "studiovinari"
        ],
        "prefix": "fab"
      },
      {
        "name": "Stroopwafel",
        "id": "stroopwafel",
        "filter": [
          "dessert",
          "food",
          "sweets",
          "waffle",
          "objects",
          "stroopwafel"
        ],
        "prefix": "fas"
      },
      {
        "name": "Stripe S",
        "id": "stripe-s",
        "filter": [
          "payments-shopping",
          "stripe-s"
        ],
        "prefix": "fab"
      },
      {
        "name": "Stripe",
        "id": "stripe",
        "filter": [
          "payments-shopping",
          "stripe"
        ],
        "prefix": "fab"
      },
      {
        "name": "Strikethrough",
        "id": "strikethrough",
        "filter": [
          "editors",
          "strikethrough"
        ],
        "prefix": "fas"
      },
      {
        "name": "Street View",
        "id": "street-view",
        "filter": [
          "map",
          "users-people",
          "maps",
          "street-view"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Strava",
        "id": "strava",
        "filter": [
          "strava"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Store",
        "id": "store-alt",
        "filter": [
          "store-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Store",
        "id": "store",
        "filter": [
          "store"
        ],
        "prefix": "fas"
      },
      {
        "name": "Stopwatch",
        "id": "stopwatch",
        "filter": [
          "time",
          "date-time",
          "objects",
          "stopwatch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Stop Circle",
        "id": "stop-circle",
        "filter": [
          "audio-video",
          "stop-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "stop",
        "id": "stop",
        "filter": [
          "block",
          "box",
          "square",
          "audio-video",
          "stop"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Sticker Mule",
        "id": "sticker-mule",
        "filter": [
          "sticker-mule"
        ],
        "prefix": "fab"
      },
      {
        "name": "Stethoscope",
        "id": "stethoscope",
        "filter": [
          "medical",
          "health",
          "stethoscope"
        ],
        "prefix": "fas"
      },
      {
        "name": "step-forward",
        "id": "step-forward",
        "filter": [
          "end",
          "last",
          "next",
          "audio-video",
          "step-forward"
        ],
        "prefix": "fas"
      },
      {
        "name": "step-backward",
        "id": "step-backward",
        "filter": [
          "beginning",
          "first",
          "previous",
          "rewind",
          "start",
          "audio-video",
          "step-backward"
        ],
        "prefix": "fas"
      },
      {
        "name": "Steam Symbol",
        "id": "steam-symbol",
        "filter": [
          "steam-symbol"
        ],
        "prefix": "fab"
      },
      {
        "name": "Steam Square",
        "id": "steam-square",
        "filter": [
          "steam-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Steam",
        "id": "steam",
        "filter": [
          "steam"
        ],
        "prefix": "fab"
      },
      {
        "name": "StayLinked",
        "id": "staylinked",
        "filter": [
          "staylinked"
        ],
        "prefix": "fab"
      },
      {
        "name": "Star Of-life",
        "id": "star-of-life",
        "filter": [
          "medical",
          "star-of-life"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "star-half",
        "id": "star-half",
        "filter": [
          "achievement",
          "award",
          "rating",
          "score",
          "star-half-empty",
          "star-half-full",
          "interfaces",
          "star-half"
        ],
        "prefix": "fas"
      },
      {
        "name": "Star",
        "id": "star",
        "filter": [
          "achievement",
          "award",
          "favorite",
          "important",
          "night",
          "rating",
          "score",
          "shapes",
          "interfaces",
          "payments-shopping",
          "objects",
          "star"
        ],
        "prefix": "fas"
      },
      {
        "name": "Stamp",
        "id": "stamp",
        "filter": [
          "design",
          "stamp"
        ],
        "prefix": "fas"
      },
      {
        "name": "Stack Overflow",
        "id": "stack-overflow",
        "filter": [
          "stack-overflow"
        ],
        "prefix": "fab"
      },
      {
        "name": "Stack Exchange",
        "id": "stack-exchange",
        "filter": [
          "stack-exchange"
        ],
        "prefix": "fab"
      },
      {
        "name": "Squarespace",
        "id": "squarespace",
        "filter": [
          "squarespace"
        ],
        "prefix": "fab"
      },
      {
        "name": "Square Full",
        "id": "square-full",
        "filter": [
          "chess",
          "square-full"
        ],
        "prefix": "fas"
      },
      {
        "name": "Square",
        "id": "square",
        "filter": [
          "block",
          "box",
          "shapes",
          "square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Spray Can",
        "id": "spray-can",
        "filter": [
          "design",
          "spray-can"
        ],
        "prefix": "fas"
      },
      {
        "name": "Spotify",
        "id": "spotify",
        "filter": [
          "spotify"
        ],
        "prefix": "fab"
      },
      {
        "name": "Splotch",
        "id": "splotch",
        "filter": [
          "design",
          "splotch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Spinner",
        "id": "spinner",
        "filter": [
          "loading",
          "progress",
          "spinners",
          "spinner"
        ],
        "prefix": "fas"
      },
      {
        "name": "Speakap",
        "id": "speakap",
        "filter": [
          "speakap"
        ],
        "prefix": "fab"
      },
      {
        "name": "Space Shuttle",
        "id": "space-shuttle",
        "filter": [
          "astronaut",
          "machine",
          "nasa",
          "rocket",
          "transportation",
          "vehicles",
          "objects",
          "space-shuttle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Spa",
        "id": "spa",
        "filter": [
          "mindfullness",
          "plant",
          "wellness",
          "travel",
          "spa"
        ],
        "prefix": "fas"
      },
      {
        "name": "SoundCloud",
        "id": "soundcloud",
        "filter": [
          "soundcloud"
        ],
        "prefix": "fab"
      },
      {
        "name": "Sort Up (Ascending)",
        "id": "sort-up",
        "filter": [
          "arrow",
          "ascending",
          "sort-asc",
          "arrows",
          "interfaces",
          "sort-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Numeric Up",
        "id": "sort-numeric-up",
        "filter": [
          "numbers",
          "sort-numeric-desc",
          "arrows",
          "interfaces",
          "sort-numeric-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Numeric Down",
        "id": "sort-numeric-down",
        "filter": [
          "numbers",
          "sort-numeric-asc",
          "arrows",
          "interfaces",
          "sort-numeric-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Down (Descending)",
        "id": "sort-down",
        "filter": [
          "arrow",
          "descending",
          "sort-desc",
          "arrows",
          "interfaces",
          "sort-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Amount Up",
        "id": "sort-amount-up",
        "filter": [
          "sort-amount-desc",
          "arrows",
          "interfaces",
          "sort-amount-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Amount Down",
        "id": "sort-amount-down",
        "filter": [
          "sort-amount-asc",
          "arrows",
          "interfaces",
          "sort-amount-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Alpha Up",
        "id": "sort-alpha-up",
        "filter": [
          "sort-alpha-desc",
          "arrows",
          "interfaces",
          "sort-alpha-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort Alpha Down",
        "id": "sort-alpha-down",
        "filter": [
          "sort-alpha-asc",
          "arrows",
          "interfaces",
          "sort-alpha-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sort",
        "id": "sort",
        "filter": [
          "order",
          "arrows",
          "interfaces",
          "sort"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Snowflake",
        "id": "snowflake",
        "filter": [
          "spinners",
          "objects",
          "snowflake"
        ],
        "prefix": "fas"
      },
      {
        "name": "Snapchat Square",
        "id": "snapchat-square",
        "filter": [
          "snapchat-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Snapchat Ghost",
        "id": "snapchat-ghost",
        "filter": [
          "snapchat-ghost"
        ],
        "prefix": "fab"
      },
      {
        "name": "Snapchat",
        "id": "snapchat",
        "filter": [
          "snapchat"
        ],
        "prefix": "fab"
      },
      {
        "name": "Smoking Ban",
        "id": "smoking-ban",
        "filter": [
          "no smoking",
          "non-smoking",
          "medical",
          "smoking-ban"
        ],
        "prefix": "fas"
      },
      {
        "name": "Smoking",
        "id": "smoking",
        "filter": [
          "cigarette",
          "nicotine",
          "smoking status",
          "medical",
          "smoking"
        ],
        "prefix": "fas"
      },
      {
        "name": "Winking Face",
        "id": "smile-wink",
        "filter": [
          "emoticon",
          "face",
          "happy",
          "emoji",
          "smile-wink"
        ],
        "prefix": "fas"
      },
      {
        "name": "Beaming Face With Smiling Eyes",
        "id": "smile-beam",
        "filter": [
          "emoticon",
          "face",
          "happy",
          "emoji",
          "smile-beam"
        ],
        "prefix": "fas"
      },
      {
        "name": "Smiling Face",
        "id": "smile",
        "filter": [
          "approve",
          "emoticon",
          "face",
          "happy",
          "rating",
          "satisfied",
          "users-people",
          "chat",
          "interfaces",
          "emoji",
          "smile"
        ],
        "prefix": "fas"
      },
      {
        "name": "Slideshare",
        "id": "slideshare",
        "filter": [
          "slideshare"
        ],
        "prefix": "fab"
      },
      {
        "name": "Horizontal Sliders",
        "id": "sliders-h",
        "filter": [
          "settings",
          "sliders",
          "images",
          "interfaces",
          "sliders-h"
        ],
        "prefix": "fas"
      },
      {
        "name": "Slack Hashtag",
        "id": "slack-hash",
        "filter": [
          "anchor",
          "hash",
          "hashtag",
          "slack-hash"
        ],
        "prefix": "fab"
      },
      {
        "name": "Slack Logo",
        "id": "slack",
        "filter": [
          "anchor",
          "hash",
          "hashtag",
          "slack"
        ],
        "prefix": "fab"
      },
      {
        "name": "Skype",
        "id": "skype",
        "filter": [
          "skype"
        ],
        "prefix": "fab"
      },
      {
        "name": "skyatlas",
        "id": "skyatlas",
        "filter": [
          "skyatlas"
        ],
        "prefix": "fab"
      },
      {
        "name": "Skull",
        "id": "skull",
        "filter": [
          "bones",
          "skeleton",
          "yorick",
          "skull"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sith",
        "id": "sith",
        "filter": [
          "sith"
        ],
        "prefix": "fab"
      },
      {
        "name": "Sitemap",
        "id": "sitemap",
        "filter": [
          "directory",
          "hierarchy",
          "ia",
          "information architecture",
          "organization",
          "interfaces",
          "business",
          "code",
          "sitemap"
        ],
        "prefix": "fas"
      },
      {
        "name": "SISTRIX",
        "id": "sistrix",
        "filter": [
          "sistrix"
        ],
        "prefix": "fab"
      },
      {
        "name": "SimplyBuilt",
        "id": "simplybuilt",
        "filter": [
          "simplybuilt"
        ],
        "prefix": "fab"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "signal",
        "id": "signal",
        "filter": [
          "bars",
          "graph",
          "online",
          "status",
          "interfaces",
          "signal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Sign Out",
        "id": "sign-out-alt",
        "filter": [
          "arrow",
          "exit",
          "leave",
          "log out",
          "logout",
          "sign-out",
          "status",
          "arrows",
          "interfaces",
          "sign-out-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sign Language",
        "id": "sign-language",
        "filter": [
          "accessibility",
          "sign-language"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Sign In",
        "id": "sign-in-alt",
        "filter": [
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
          "status",
          "arrows",
          "interfaces",
          "sign-in-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sign",
        "id": "sign",
        "filter": [
          "moving",
          "sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shuttle Van",
        "id": "shuttle-van",
        "filter": [
          "machine",
          "public-transportation",
          "transportation",
          "vehicle",
          "travel",
          "vehicles",
          "automotive",
          "shuttle-van"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shower",
        "id": "shower",
        "filter": [
          "objects",
          "maps",
          "shower"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shopware",
        "id": "shopware",
        "filter": [
          "shopware"
        ],
        "prefix": "fab"
      },
      {
        "name": "shopping-cart",
        "id": "shopping-cart",
        "filter": [
          "buy",
          "checkout",
          "payment",
          "purchase",
          "vehicles",
          "status",
          "payments-shopping",
          "objects",
          "maps",
          "shopping-cart"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shopping Basket",
        "id": "shopping-basket",
        "filter": [
          "payments-shopping",
          "objects",
          "maps",
          "shopping-basket"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shopping Bag",
        "id": "shopping-bag",
        "filter": [
          "payments-shopping",
          "objects",
          "maps",
          "shopping-bag"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shoe Prints",
        "id": "shoe-prints",
        "filter": [
          "feet",
          "footprints",
          "steps",
          "maps",
          "shoe-prints"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shirts in Bulk",
        "id": "shirtsinbulk",
        "filter": [
          "shirtsinbulk"
        ],
        "prefix": "fab"
      },
      {
        "name": "Shipping Fast",
        "id": "shipping-fast",
        "filter": [
          "logistics",
          "shipping-fast"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ship",
        "id": "ship",
        "filter": [
          "boat",
          "sea",
          "vehicles",
          "maps",
          "ship"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Shield",
        "id": "shield-alt",
        "filter": [
          "shield",
          "status",
          "interfaces",
          "objects",
          "code",
          "shield-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shekel Sign",
        "id": "shekel-sign",
        "filter": [
          "ils",
          "ils",
          "currency",
          "shekel-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Share Square",
        "id": "share-square",
        "filter": [
          "send",
          "social",
          "arrows",
          "interfaces",
          "share-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Share Square",
        "id": "share-alt-square",
        "filter": [
          "interfaces",
          "share-alt-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Share",
        "id": "share-alt",
        "filter": [
          "interfaces",
          "share-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Share",
        "id": "share",
        "filter": [
          "arrows",
          "interfaces",
          "editors",
          "share"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shapes",
        "id": "shapes",
        "filter": [
          "circle",
          "square",
          "triangle",
          "education",
          "shapes"
        ],
        "prefix": "fas"
      },
      {
        "name": "Servicestack",
        "id": "servicestack",
        "filter": [
          "servicestack"
        ],
        "prefix": "fab"
      },
      {
        "name": "Server",
        "id": "server",
        "filter": [
          "cpu",
          "computers",
          "server"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sellsy",
        "id": "sellsy",
        "filter": [
          "sellsy"
        ],
        "prefix": "fab"
      },
      {
        "name": "Sellcast",
        "id": "sellcast",
        "filter": [
          "eercast",
          "sellcast"
        ],
        "prefix": "fab"
      },
      {
        "name": "Seedling",
        "id": "seedling",
        "filter": [
          "charity",
          "seedling"
        ],
        "prefix": "fas"
      },
      {
        "name": "Searchengin",
        "id": "searchengin",
        "filter": [
          "searchengin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Search Plus",
        "id": "search-plus",
        "filter": [
          "bigger",
          "enlarge",
          "magnify",
          "zoom",
          "zoom in",
          "interfaces",
          "maps",
          "search-plus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Search Minus",
        "id": "search-minus",
        "filter": [
          "magnify",
          "minify",
          "smaller",
          "zoom",
          "zoom out",
          "interfaces",
          "maps",
          "search-minus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Search",
        "id": "search",
        "filter": [
          "bigger",
          "enlarge",
          "magnify",
          "preview",
          "zoom",
          "interfaces",
          "objects",
          "maps",
          "search"
        ],
        "prefix": "fas"
      },
      {
        "name": "Scribd",
        "id": "scribd",
        "filter": [
          "scribd"
        ],
        "prefix": "fab"
      },
      {
        "name": "Screwdriver",
        "id": "screwdriver",
        "filter": [
          "admin",
          "container",
          "fix",
          "repair",
          "settings",
          "tool",
          "interfaces",
          "editors",
          "objects",
          "screwdriver"
        ],
        "prefix": "fas"
      },
      {
        "name": "School",
        "id": "school",
        "filter": [
          "buildings",
          "education",
          "objects",
          "school"
        ],
        "prefix": "fas"
      },
      {
        "name": "SCHLIX",
        "id": "schlix",
        "filter": [
          "schlix"
        ],
        "prefix": "fab"
      },
      {
        "name": "Save",
        "id": "save",
        "filter": [
          "floppy",
          "floppy-o",
          "files",
          "computers",
          "design",
          "interfaces",
          "business",
          "objects",
          "save"
        ],
        "prefix": "fas"
      },
      {
        "name": "Sass",
        "id": "sass",
        "filter": [
          "sass"
        ],
        "prefix": "fab"
      },
      {
        "name": "Safari",
        "id": "safari",
        "filter": [
          "browser",
          "safari"
        ],
        "prefix": "fab"
      },
      {
        "name": "Loudly Crying Face",
        "id": "sad-tear",
        "filter": [
          "emoticon",
          "face",
          "tear",
          "tears",
          "emoji",
          "sad-tear"
        ],
        "prefix": "fas"
      },
      {
        "name": "Crying Face",
        "id": "sad-cry",
        "filter": [
          "emoticon",
          "face",
          "tear",
          "tears",
          "emoji",
          "sad-cry"
        ],
        "prefix": "fas"
      },
      {
        "name": "Indian Rupee Sign",
        "id": "rupee-sign",
        "filter": [
          "indian",
          "inr",
          "currency",
          "rupee-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ruler Vertical",
        "id": "ruler-vertical",
        "filter": [
          "design",
          "objects",
          "ruler-vertical"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ruler Horizontal",
        "id": "ruler-horizontal",
        "filter": [
          "design",
          "objects",
          "ruler-horizontal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ruler Combined",
        "id": "ruler-combined",
        "filter": [
          "design",
          "objects",
          "ruler-combined"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ruler",
        "id": "ruler",
        "filter": [
          "ruler"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ruble Sign",
        "id": "ruble-sign",
        "filter": [
          "rub",
          "rub",
          "currency",
          "ruble-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "RSS Square",
        "id": "rss-square",
        "filter": [
          "blog",
          "feed",
          "audio-video",
          "interfaces",
          "communication",
          "rss-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "rss",
        "id": "rss",
        "filter": [
          "blog",
          "audio-video",
          "interfaces",
          "communication",
          "rss"
        ],
        "prefix": "fas"
      },
      {
        "name": "Route",
        "id": "route",
        "filter": [
          "moving",
          "maps",
          "route"
        ],
        "prefix": "fas"
      },
      {
        "name": "Rockrms",
        "id": "rockrms",
        "filter": [
          "rockrms"
        ],
        "prefix": "fab"
      },
      {
        "name": "Rocket.Chat",
        "id": "rocketchat",
        "filter": [
          "rocketchat"
        ],
        "prefix": "fab"
      },
      {
        "name": "rocket",
        "id": "rocket",
        "filter": [
          "app",
          "vehicles",
          "objects",
          "maps",
          "rocket"
        ],
        "prefix": "fas"
      },
      {
        "name": "Robot",
        "id": "robot",
        "filter": [
          "robot"
        ],
        "prefix": "fas"
      },
      {
        "name": "road",
        "id": "road",
        "filter": [
          "street",
          "objects",
          "maps",
          "road"
        ],
        "prefix": "fas"
      },
      {
        "name": "Ribbon",
        "id": "ribbon",
        "filter": [
          "badge",
          "cause",
          "lapel",
          "pin",
          "charity",
          "ribbon"
        ],
        "prefix": "fas"
      },
      {
        "name": "Rev.io",
        "id": "rev",
        "filter": [
          "rev"
        ],
        "prefix": "fab"
      },
      {
        "name": "Retweet",
        "id": "retweet",
        "filter": [
          "refresh",
          "reload",
          "share",
          "swap",
          "arrows",
          "retweet"
        ],
        "prefix": "fas"
      },
      {
        "name": "Resolving",
        "id": "resolving",
        "filter": [
          "resolving"
        ],
        "prefix": "fab"
      },
      {
        "name": "Researchgate",
        "id": "researchgate",
        "filter": [
          "researchgate"
        ],
        "prefix": "fab"
      },
      {
        "name": "replyd",
        "id": "replyd",
        "filter": [
          "replyd"
        ],
        "prefix": "fab"
      },
      {
        "name": "reply-all",
        "id": "reply-all",
        "filter": [
          "arrows",
          "interfaces",
          "editors",
          "reply-all"
        ],
        "prefix": "fas"
      },
      {
        "name": "Reply",
        "id": "reply",
        "filter": [
          "arrows",
          "interfaces",
          "editors",
          "reply"
        ],
        "prefix": "fas"
      },
      {
        "name": "Renren",
        "id": "renren",
        "filter": [
          "renren"
        ],
        "prefix": "fab"
      },
      {
        "name": "Rendact",
        "id": "rendact",
        "filter": [
          "rendact"
        ],
        "prefix": "fab"
      },
      {
        "name": "Registered Trademark",
        "id": "registered",
        "filter": [
          "business",
          "registered"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Redo",
        "id": "redo-alt",
        "filter": [
          "forward",
          "repeat",
          "arrows",
          "audio-video",
          "interfaces",
          "editors",
          "redo-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Redo",
        "id": "redo",
        "filter": [
          "forward",
          "repeat",
          "repeat",
          "arrows",
          "audio-video",
          "interfaces",
          "editors",
          "redo"
        ],
        "prefix": "fas"
      },
      {
        "name": "reddit Square",
        "id": "reddit-square",
        "filter": [
          "reddit-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "reddit Alien",
        "id": "reddit-alien",
        "filter": [
          "reddit-alien"
        ],
        "prefix": "fab"
      },
      {
        "name": "reddit Logo",
        "id": "reddit",
        "filter": [
          "reddit"
        ],
        "prefix": "fab"
      },
      {
        "name": "red river",
        "id": "red-river",
        "filter": [
          "red-river"
        ],
        "prefix": "fab"
      },
      {
        "name": "Recycle",
        "id": "recycle",
        "filter": [
          "arrows",
          "maps",
          "recycle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Receipt",
        "id": "receipt",
        "filter": [
          "check",
          "invoice",
          "table",
          "receipt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Rebel Alliance",
        "id": "rebel",
        "filter": [
          "rebel"
        ],
        "prefix": "fab"
      },
      {
        "name": "ReadMe",
        "id": "readme",
        "filter": [
          "readme"
        ],
        "prefix": "fab"
      },
      {
        "name": "React",
        "id": "react",
        "filter": [
          "react"
        ],
        "prefix": "fab"
      },
      {
        "name": "Ravelry",
        "id": "ravelry",
        "filter": [
          "ravelry"
        ],
        "prefix": "fab"
      },
      {
        "name": "random",
        "id": "random",
        "filter": [
          "shuffle",
          "sort",
          "arrows",
          "audio-video",
          "random"
        ],
        "prefix": "fas"
      },
      {
        "name": "R Project",
        "id": "r-project",
        "filter": [
          "r-project"
        ],
        "prefix": "fab"
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
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Quora",
        "id": "quora",
        "filter": [
          "quora"
        ],
        "prefix": "fab"
      },
      {
        "name": "QuinScape",
        "id": "quinscape",
        "filter": [
          "quinscape"
        ],
        "prefix": "fab"
      },
      {
        "name": "Quidditch",
        "id": "quidditch",
        "filter": [
          "sports",
          "quidditch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Question Circle",
        "id": "question-circle",
        "filter": [
          "help",
          "information",
          "support",
          "unknown",
          "status",
          "interfaces",
          "accessibility",
          "question-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Question",
        "id": "question",
        "filter": [
          "help",
          "information",
          "support",
          "unknown",
          "status",
          "interfaces",
          "question"
        ],
        "prefix": "fas"
      },
      {
        "name": "qrcode",
        "id": "qrcode",
        "filter": [
          "scan",
          "interfaces",
          "code",
          "qrcode"
        ],
        "prefix": "fas"
      },
      {
        "name": "QQ",
        "id": "qq",
        "filter": [
          "qq"
        ],
        "prefix": "fab"
      },
      {
        "name": "Python",
        "id": "python",
        "filter": [
          "python"
        ],
        "prefix": "fab"
      },
      {
        "name": "Puzzle Piece",
        "id": "puzzle-piece",
        "filter": [
          "add-on",
          "addon",
          "section",
          "objects",
          "puzzle-piece"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pushed",
        "id": "pushed",
        "filter": [
          "pushed"
        ],
        "prefix": "fab"
      },
      {
        "name": "Project Diagram",
        "id": "project-diagram",
        "filter": [
          "business",
          "code",
          "project-diagram"
        ],
        "prefix": "fas"
      },
      {
        "name": "Product Hunt",
        "id": "product-hunt",
        "filter": [
          "product-hunt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Procedures",
        "id": "procedures",
        "filter": [
          "medical",
          "procedures"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Prescription Bottle",
        "id": "prescription-bottle-alt",
        "filter": [
          "drugs",
          "medical",
          "medicine",
          "rx",
          "prescription-bottle-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Prescription Bottle",
        "id": "prescription-bottle",
        "filter": [
          "drugs",
          "medical",
          "medicine",
          "rx",
          "prescription-bottle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Prescription",
        "id": "prescription",
        "filter": [
          "drugs",
          "medical",
          "medicine",
          "rx",
          "health",
          "prescription"
        ],
        "prefix": "fas"
      },
      {
        "name": "Power Off",
        "id": "power-off",
        "filter": [
          "on",
          "reboot",
          "restart",
          "users-people",
          "computers",
          "power-off"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pound Sign",
        "id": "pound-sign",
        "filter": [
          "gbp",
          "gbp",
          "currency",
          "pound-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Portrait",
        "id": "portrait",
        "filter": [
          "users-people",
          "images",
          "portrait"
        ],
        "prefix": "fas"
      },
      {
        "name": "Poop",
        "id": "poop",
        "filter": [
          "medical",
          "poop"
        ],
        "prefix": "fas"
      },
      {
        "name": "Poo",
        "id": "poo",
        "filter": [
          "users-people",
          "chat",
          "interfaces",
          "poo"
        ],
        "prefix": "fas"
      },
      {
        "name": "Podcast",
        "id": "podcast",
        "filter": [
          "audio-video",
          "podcast"
        ],
        "prefix": "fas"
      },
      {
        "name": "Plus Square",
        "id": "plus-square",
        "filter": [
          "add",
          "create",
          "expand",
          "new",
          "status",
          "interfaces",
          "health",
          "maps",
          "plus-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Plus Circle",
        "id": "plus-circle",
        "filter": [
          "add",
          "create",
          "expand",
          "new",
          "status",
          "interfaces",
          "plus-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "plus",
        "id": "plus",
        "filter": [
          "add",
          "create",
          "expand",
          "new",
          "mathematics",
          "medical",
          "status",
          "interfaces",
          "maps",
          "plus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Plug",
        "id": "plug",
        "filter": [
          "connect",
          "online",
          "power",
          "computers",
          "objects",
          "maps",
          "plug"
        ],
        "prefix": "fas"
      },
      {
        "name": "PlayStation",
        "id": "playstation",
        "filter": [
          "playstation"
        ],
        "prefix": "fab"
      },
      {
        "name": "Play Circle",
        "id": "play-circle",
        "filter": [
          "playing",
          "start",
          "audio-video",
          "play-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "play",
        "id": "play",
        "filter": [
          "music",
          "playing",
          "sound",
          "start",
          "arrows",
          "audio-video",
          "shapes",
          "play"
        ],
        "prefix": "fas"
      },
      {
        "name": "Plane Departure",
        "id": "plane-departure",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Plane Arrival",
        "id": "plane-arrival",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "plane",
        "id": "plane",
        "filter": [
          "airplane",
          "destination",
          "fly",
          "location",
          "mode",
          "travel",
          "trip",
          "vehicles",
          "objects",
          "maps",
          "plane"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pinterest Square",
        "id": "pinterest-square",
        "filter": [
          "pinterest-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Pinterest P",
        "id": "pinterest-p",
        "filter": [
          "pinterest-p"
        ],
        "prefix": "fab"
      },
      {
        "name": "Pinterest",
        "id": "pinterest",
        "filter": [
          "pinterest"
        ],
        "prefix": "fab"
      },
      {
        "name": "Pills",
        "id": "pills",
        "filter": [
          "drugs",
          "medicine",
          "medical",
          "pills"
        ],
        "prefix": "fas"
      },
      {
        "name": "Piggy Bank",
        "id": "piggy-bank",
        "filter": [
          "save",
          "savings",
          "charity",
          "piggy-bank"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pied Piper PP Logo (Old)",
        "id": "pied-piper-pp",
        "filter": [
          "pied-piper-pp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Pied Piper-hat",
        "id": "pied-piper-hat",
        "filter": [
          "clothing",
          "pied-piper-hat"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Pied Piper Logo",
        "id": "pied-piper-alt",
        "filter": [
          "pied-piper-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Pied Piper Logo",
        "id": "pied-piper",
        "filter": [
          "pied-piper"
        ],
        "prefix": "fab"
      },
      {
        "name": "PHP",
        "id": "php",
        "filter": [
          "php"
        ],
        "prefix": "fab"
      },
      {
        "name": "Phone Volume",
        "id": "phone-volume",
        "filter": [
          "telephone",
          "volume-control-phone",
          "audio-video",
          "communication",
          "business",
          "accessibility",
          "maps",
          "phone-volume"
        ],
        "prefix": "fas"
      },
      {
        "name": "Phone Square",
        "id": "phone-square",
        "filter": [
          "call",
          "number",
          "support",
          "telephone",
          "voice",
          "communication",
          "business",
          "maps",
          "phone-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Phone Slash",
        "id": "phone-slash",
        "filter": [
          "chat",
          "communication",
          "business",
          "phone-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Phone",
        "id": "phone",
        "filter": [
          "call",
          "earphone",
          "number",
          "support",
          "telephone",
          "voice",
          "chat",
          "communication",
          "business",
          "objects",
          "maps",
          "phone"
        ],
        "prefix": "fas"
      },
      {
        "name": "Phoenix Squadron",
        "id": "phoenix-squadron",
        "filter": [
          "phoenix-squadron"
        ],
        "prefix": "fab"
      },
      {
        "name": "Phoenix Framework",
        "id": "phoenix-framework",
        "filter": [
          "phoenix-framework"
        ],
        "prefix": "fab"
      },
      {
        "name": "Phabricator",
        "id": "phabricator",
        "filter": [
          "phabricator"
        ],
        "prefix": "fab"
      },
      {
        "name": "Periscope",
        "id": "periscope",
        "filter": [
          "periscope"
        ],
        "prefix": "fab"
      },
      {
        "name": "Percentage",
        "id": "percentage",
        "filter": [
          "mathematics",
          "percentage"
        ],
        "prefix": "fas"
      },
      {
        "name": "Percent",
        "id": "percent",
        "filter": [
          "business",
          "percent"
        ],
        "prefix": "fas"
      },
      {
        "name": "People Carry",
        "id": "people-carry",
        "filter": [
          "movers",
          "moving",
          "people-carry"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pencil Ruler",
        "id": "pencil-ruler",
        "filter": [
          "design",
          "pencil-ruler"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Pencil",
        "id": "pencil-alt",
        "filter": [
          "design",
          "edit",
          "pencil",
          "update",
          "write",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "pencil-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pen Square",
        "id": "pen-square",
        "filter": [
          "edit",
          "pencil-square",
          "update",
          "write",
          "writing",
          "business",
          "pen-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pen Nib",
        "id": "pen-nib",
        "filter": [
          "design",
          "edit",
          "fountain pen",
          "update",
          "write",
          "editors",
          "business",
          "objects",
          "pen-nib"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pen Fancy",
        "id": "pen-fancy",
        "filter": [
          "design",
          "edit",
          "fountain pen",
          "update",
          "write",
          "interfaces",
          "editors",
          "business",
          "objects",
          "pen-fancy"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Pen",
        "id": "pen-alt",
        "filter": [
          "design",
          "edit",
          "update",
          "write",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "pen-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pen",
        "id": "pen",
        "filter": [
          "design",
          "edit",
          "update",
          "write",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "pen"
        ],
        "prefix": "fas"
      },
      {
        "name": "Paypal",
        "id": "paypal",
        "filter": [
          "payments-shopping",
          "paypal"
        ],
        "prefix": "fab"
      },
      {
        "name": "Paw",
        "id": "paw",
        "filter": [
          "pet",
          "objects",
          "maps",
          "paw"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pause Circle",
        "id": "pause-circle",
        "filter": [
          "audio-video",
          "pause-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "pause",
        "id": "pause",
        "filter": [
          "wait",
          "audio-video",
          "pause"
        ],
        "prefix": "fas"
      },
      {
        "name": "Patreon",
        "id": "patreon",
        "filter": [
          "patreon"
        ],
        "prefix": "fab"
      },
      {
        "name": "Paste",
        "id": "paste",
        "filter": [
          "clipboard",
          "copy",
          "files",
          "design",
          "interfaces",
          "editors",
          "business",
          "objects",
          "paste"
        ],
        "prefix": "fas"
      },
      {
        "name": "Passport",
        "id": "passport",
        "filter": [
          "document",
          "identification",
          "issued",
          "travel",
          "passport"
        ],
        "prefix": "fas"
      },
      {
        "name": "Parking",
        "id": "parking",
        "filter": [
          "maps",
          "parking"
        ],
        "prefix": "fas"
      },
      {
        "name": "paragraph",
        "id": "paragraph",
        "filter": [
          "writing",
          "editors",
          "paragraph"
        ],
        "prefix": "fas"
      },
      {
        "name": "Parachute Box",
        "id": "parachute-box",
        "filter": [
          "aid",
          "assistance",
          "rescue",
          "supplies",
          "charity",
          "parachute-box"
        ],
        "prefix": "fas"
      },
      {
        "name": "Paperclip",
        "id": "paperclip",
        "filter": [
          "attachment",
          "writing",
          "editors",
          "business",
          "objects",
          "paperclip"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Pallet",
        "id": "pallet",
        "filter": [
          "logistics",
          "pallet"
        ],
        "prefix": "fas"
      },
      {
        "name": "Palfed",
        "id": "palfed",
        "filter": [
          "palfed"
        ],
        "prefix": "fab"
      },
      {
        "name": "Palette",
        "id": "palette",
        "filter": [
          "colors",
          "painting",
          "design",
          "palette"
        ],
        "prefix": "fas"
      },
      {
        "name": "Paint Roller",
        "id": "paint-roller",
        "filter": [
          "brush",
          "painting",
          "tool",
          "design",
          "paint-roller"
        ],
        "prefix": "fas"
      },
      {
        "name": "Paint Brush",
        "id": "paint-brush",
        "filter": [
          "design",
          "objects",
          "paint-brush"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fab"
      },
      {
        "name": "page4 Corporation",
        "id": "page4",
        "filter": [
          "page4"
        ],
        "prefix": "fab"
      },
      {
        "name": "Outdent",
        "id": "outdent",
        "filter": [
          "editors",
          "outdent"
        ],
        "prefix": "fas"
      },
      {
        "name": "Open Source Initiative",
        "id": "osi",
        "filter": [
          "osi"
        ],
        "prefix": "fab"
      },
      {
        "name": "Optin Monster",
        "id": "optin-monster",
        "filter": [
          "optin-monster"
        ],
        "prefix": "fab"
      },
      {
        "name": "Opera",
        "id": "opera",
        "filter": [
          "opera"
        ],
        "prefix": "fab"
      },
      {
        "name": "OpenID",
        "id": "openid",
        "filter": [
          "openid"
        ],
        "prefix": "fab"
      },
      {
        "name": "OpenCart",
        "id": "opencart",
        "filter": [
          "opencart"
        ],
        "prefix": "fab"
      },
      {
        "name": "Old Republic",
        "id": "old-republic",
        "filter": [
          "old-republic"
        ],
        "prefix": "fab"
      },
      {
        "name": "Oil Can",
        "id": "oil-can",
        "filter": [
          "automotive",
          "oil-can"
        ],
        "prefix": "fas"
      },
      {
        "name": "Odnoklassniki Square",
        "id": "odnoklassniki-square",
        "filter": [
          "odnoklassniki-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Odnoklassniki",
        "id": "odnoklassniki",
        "filter": [
          "odnoklassniki"
        ],
        "prefix": "fab"
      },
      {
        "name": "Object Ungroup",
        "id": "object-ungroup",
        "filter": [
          "design",
          "object-ungroup"
        ],
        "prefix": "fas"
      },
      {
        "name": "Object Group",
        "id": "object-group",
        "filter": [
          "design",
          "object-group"
        ],
        "prefix": "fas"
      },
      {
        "name": "Nutritionix",
        "id": "nutritionix",
        "filter": [
          "nutritionix"
        ],
        "prefix": "fab"
      },
      {
        "name": "NS8",
        "id": "ns8",
        "filter": [
          "ns8"
        ],
        "prefix": "fab"
      },
      {
        "name": "npm",
        "id": "npm",
        "filter": [
          "npm"
        ],
        "prefix": "fab"
      },
      {
        "name": "Medical Notes",
        "id": "notes-medical",
        "filter": [
          "medical",
          "notes-medical"
        ],
        "prefix": "fas"
      },
      {
        "name": "Not Equal",
        "id": "not-equal",
        "filter": [
          "mathematics",
          "not-equal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Node.js JS",
        "id": "node-js",
        "filter": [
          "node-js"
        ],
        "prefix": "fab"
      },
      {
        "name": "Node.js",
        "id": "node",
        "filter": [
          "node"
        ],
        "prefix": "fab"
      },
      {
        "name": "Nintendo Switch",
        "id": "nintendo-switch",
        "filter": [
          "nintendo-switch"
        ],
        "prefix": "fab"
      },
      {
        "name": "Nimblr",
        "id": "nimblr",
        "filter": [
          "nimblr"
        ],
        "prefix": "fab"
      },
      {
        "name": "Newspaper",
        "id": "newspaper",
        "filter": [
          "article",
          "press",
          "writing",
          "objects",
          "maps",
          "newspaper"
        ],
        "prefix": "fas"
      },
      {
        "name": "Neuter",
        "id": "neuter",
        "filter": [
          "gender",
          "neuter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Neos",
        "id": "neos",
        "filter": [
          "neos"
        ],
        "prefix": "fab"
      },
      {
        "name": "Napster",
        "id": "napster",
        "filter": [
          "napster"
        ],
        "prefix": "fab"
      },
      {
        "name": "Music",
        "id": "music",
        "filter": [
          "note",
          "sound",
          "education",
          "audio-video",
          "maps",
          "music"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mouse Pointer",
        "id": "mouse-pointer",
        "filter": [
          "select",
          "arrows",
          "mouse-pointer"
        ],
        "prefix": "fas"
      },
      {
        "name": "Motorcycle",
        "id": "motorcycle",
        "filter": [
          "bike",
          "machine",
          "transportation",
          "vehicle",
          "vehicles",
          "automotive",
          "objects",
          "maps",
          "motorcycle"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Moon",
        "id": "moon",
        "filter": [
          "contrast",
          "darker",
          "night",
          "objects",
          "moon"
        ],
        "prefix": "fas"
      },
      {
        "name": "Monument",
        "id": "monument",
        "filter": [
          "building",
          "historic",
          "memoroable",
          "travel",
          "monument"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Money Check",
        "id": "money-check-alt",
        "filter": [
          "bank check",
          "cheque",
          "currency",
          "payments-shopping",
          "objects",
          "money-check-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Money Check",
        "id": "money-check",
        "filter": [
          "bank check",
          "cheque",
          "currency",
          "payments-shopping",
          "objects",
          "money-check"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Wavy Money Bill",
        "id": "money-bill-wave-alt",
        "filter": [
          "currency",
          "money-bill-wave-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Wavy Money Bill",
        "id": "money-bill-wave",
        "filter": [
          "currency",
          "money-bill-wave"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Money Bill",
        "id": "money-bill-alt",
        "filter": [
          "buy",
          "cash",
          "checkout",
          "money",
          "payment",
          "price",
          "purchase",
          "currency",
          "objects",
          "maps",
          "money-bill-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Money Bill",
        "id": "money-bill",
        "filter": [
          "buy",
          "cash",
          "checkout",
          "money",
          "payment",
          "price",
          "purchase",
          "currency",
          "objects",
          "maps",
          "money-bill"
        ],
        "prefix": "fas"
      },
      {
        "name": "Monero",
        "id": "monero",
        "filter": [
          "monero"
        ],
        "prefix": "fab"
      },
      {
        "name": "MODX",
        "id": "modx",
        "filter": [
          "modx"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Mobile",
        "id": "mobile-alt",
        "filter": [
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
          "computers",
          "communication",
          "objects",
          "mobile-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mobile Phone",
        "id": "mobile",
        "filter": [
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
          "computers",
          "communication",
          "objects",
          "mobile"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mizuni",
        "id": "mizuni",
        "filter": [
          "mizuni"
        ],
        "prefix": "fab"
      },
      {
        "name": "Mixcloud",
        "id": "mixcloud",
        "filter": [
          "mixcloud"
        ],
        "prefix": "fab"
      },
      {
        "name": "Mix",
        "id": "mix",
        "filter": [
          "mix"
        ],
        "prefix": "fab"
      },
      {
        "name": "Minus Square",
        "id": "minus-square",
        "filter": [
          "collapse",
          "delete",
          "hide",
          "hide",
          "minify",
          "remove",
          "trash",
          "status",
          "interfaces",
          "minus-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Minus Circle",
        "id": "minus-circle",
        "filter": [
          "delete",
          "hide",
          "remove",
          "trash",
          "status",
          "interfaces",
          "minus-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "minus",
        "id": "minus",
        "filter": [
          "collapse",
          "delete",
          "hide",
          "hide",
          "minify",
          "remove",
          "trash",
          "mathematics",
          "status",
          "interfaces",
          "minus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Microsoft",
        "id": "microsoft",
        "filter": [
          "microsoft"
        ],
        "prefix": "fab"
      },
      {
        "name": "Microscope",
        "id": "microscope",
        "filter": [
          "medical",
          "education",
          "microscope"
        ],
        "prefix": "fas"
      },
      {
        "name": "Microphone Slash",
        "id": "microphone-slash",
        "filter": [
          "disable",
          "mute",
          "record",
          "sound",
          "voice",
          "audio-video",
          "interfaces",
          "communication",
          "microphone-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Microphone Slash",
        "id": "microphone-alt-slash",
        "filter": [
          "disable",
          "mute",
          "record",
          "sound",
          "voice",
          "audio-video",
          "communication",
          "microphone-alt-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Microphone",
        "id": "microphone-alt",
        "filter": [
          "record",
          "sound",
          "voice",
          "audio-video",
          "interfaces",
          "communication",
          "objects",
          "microphone-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "microphone",
        "id": "microphone",
        "filter": [
          "record",
          "sound",
          "voice",
          "audio-video",
          "interfaces",
          "communication",
          "objects",
          "microphone"
        ],
        "prefix": "fas"
      },
      {
        "name": "Microchip",
        "id": "microchip",
        "filter": [
          "cpu",
          "processor",
          "computers",
          "objects",
          "code",
          "microchip"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mercury",
        "id": "mercury",
        "filter": [
          "transgender",
          "gender",
          "mercury"
        ],
        "prefix": "fas"
      },
      {
        "name": "Memory",
        "id": "memory",
        "filter": [
          "DIMM",
          "RAM",
          "computers",
          "objects",
          "memory"
        ],
        "prefix": "fas"
      },
      {
        "name": "Face With Rolling Eyes",
        "id": "meh-rolling-eyes",
        "filter": [
          "emoticon",
          "face",
          "neutral",
          "rating",
          "emoji",
          "meh-rolling-eyes"
        ],
        "prefix": "fas"
      },
      {
        "name": "Face Without Mouth",
        "id": "meh-blank",
        "filter": [
          "emoticon",
          "face",
          "neutral",
          "rating",
          "emoji",
          "meh-blank"
        ],
        "prefix": "fas"
      },
      {
        "name": "Neutral Face",
        "id": "meh",
        "filter": [
          "emoticon",
          "face",
          "neutral",
          "rating",
          "users-people",
          "chat",
          "interfaces",
          "emoji",
          "meh"
        ],
        "prefix": "fas"
      },
      {
        "name": "Megaport",
        "id": "megaport",
        "filter": [
          "megaport"
        ],
        "prefix": "fab"
      },
      {
        "name": "Meetup",
        "id": "meetup",
        "filter": [
          "meetup"
        ],
        "prefix": "fab"
      },
      {
        "name": "MRT",
        "id": "medrt",
        "filter": [
          "medrt"
        ],
        "prefix": "fab"
      },
      {
        "name": "medkit",
        "id": "medkit",
        "filter": [
          "first aid",
          "firstaid",
          "health",
          "help",
          "support",
          "objects",
          "maps",
          "medkit"
        ],
        "prefix": "fas"
      },
      {
        "name": "Medium M",
        "id": "medium-m",
        "filter": [
          "medium-m"
        ],
        "prefix": "fab"
      },
      {
        "name": "Medium",
        "id": "medium",
        "filter": [
          "medium"
        ],
        "prefix": "fab"
      },
      {
        "name": "MedApps",
        "id": "medapps",
        "filter": [
          "medapps"
        ],
        "prefix": "fab"
      },
      {
        "name": "Medal",
        "id": "medal",
        "filter": [
          "interfaces",
          "objects",
          "medal"
        ],
        "prefix": "fas"
      },
      {
        "name": "MaxCDN",
        "id": "maxcdn",
        "filter": [
          "maxcdn"
        ],
        "prefix": "fab"
      },
      {
        "name": "Mastodon",
        "id": "mastodon",
        "filter": [
          "mastodon"
        ],
        "prefix": "fab"
      },
      {
        "name": "Mars Stroke Vertical",
        "id": "mars-stroke-v",
        "filter": [
          "gender",
          "mars-stroke-v"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mars Stroke Horizontal",
        "id": "mars-stroke-h",
        "filter": [
          "gender",
          "mars-stroke-h"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mars Stroke",
        "id": "mars-stroke",
        "filter": [
          "gender",
          "mars-stroke"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mars Double",
        "id": "mars-double",
        "filter": [
          "gender",
          "mars-double"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mars",
        "id": "mars",
        "filter": [
          "male",
          "gender",
          "mars"
        ],
        "prefix": "fas"
      },
      {
        "name": "Marker",
        "id": "marker",
        "filter": [
          "edit",
          "sharpie",
          "update",
          "write",
          "design",
          "interfaces",
          "editors",
          "business",
          "objects",
          "marker"
        ],
        "prefix": "fas"
      },
      {
        "name": "Markdown",
        "id": "markdown",
        "filter": [
          "markdown"
        ],
        "prefix": "fab"
      },
      {
        "name": "Map Signs",
        "id": "map-signs",
        "filter": [
          "objects",
          "maps",
          "map-signs"
        ],
        "prefix": "fas"
      },
      {
        "name": "Map Pin",
        "id": "map-pin",
        "filter": [
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
          "objects",
          "maps",
          "map-pin"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Map Marker",
        "id": "map-marker-alt",
        "filter": [
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
          "objects",
          "maps",
          "map-marker-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "map-marker",
        "id": "map-marker",
        "filter": [
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
          "shapes",
          "objects",
          "maps",
          "map-marker"
        ],
        "prefix": "fas"
      },
      {
        "name": "Map Marked-alt",
        "id": "map-marked-alt",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Map Marked",
        "id": "map-marked",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Map",
        "id": "map",
        "filter": [
          "coordinates",
          "location",
          "paper",
          "place",
          "travel",
          "objects",
          "maps",
          "map"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mandalorian",
        "id": "mandalorian",
        "filter": [
          "mandalorian"
        ],
        "prefix": "fab"
      },
      {
        "name": "Male",
        "id": "male",
        "filter": [
          "human",
          "man",
          "person",
          "profile",
          "user",
          "users-people",
          "maps",
          "male"
        ],
        "prefix": "fas"
      },
      {
        "name": "Mailchimp",
        "id": "mailchimp",
        "filter": [
          "mailchimp"
        ],
        "prefix": "fab"
      },
      {
        "name": "magnet",
        "id": "magnet",
        "filter": [
          "objects",
          "maps",
          "magnet"
        ],
        "prefix": "fas"
      },
      {
        "name": "magic",
        "id": "magic",
        "filter": [
          "autocomplete",
          "automatic",
          "wizard",
          "design",
          "interfaces",
          "objects",
          "magic"
        ],
        "prefix": "fas"
      },
      {
        "name": "Magento",
        "id": "magento",
        "filter": [
          "magento"
        ],
        "prefix": "fab"
      },
      {
        "name": "lyft",
        "id": "lyft",
        "filter": [
          "lyft"
        ],
        "prefix": "fab"
      },
      {
        "name": "Luggage Cart",
        "id": "luggage-cart",
        "filter": [
          "travel",
          "luggage-cart"
        ],
        "prefix": "fas"
      },
      {
        "name": "Low Vision",
        "id": "low-vision",
        "filter": [
          "accessibility",
          "maps",
          "low-vision"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Long Arrow Up",
        "id": "long-arrow-alt-up",
        "filter": [
          "long-arrow-up",
          "arrows",
          "long-arrow-alt-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Long Arrow Right",
        "id": "long-arrow-alt-right",
        "filter": [
          "long-arrow-right",
          "arrows",
          "long-arrow-alt-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Long Arrow Left",
        "id": "long-arrow-alt-left",
        "filter": [
          "back",
          "long-arrow-left",
          "previous",
          "arrows",
          "long-arrow-alt-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Long Arrow Down",
        "id": "long-arrow-alt-down",
        "filter": [
          "long-arrow-down",
          "arrows",
          "long-arrow-alt-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Lock Open",
        "id": "lock-open",
        "filter": [
          "admin",
          "lock",
          "open",
          "password",
          "protect",
          "status",
          "objects",
          "lock-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "lock",
        "id": "lock",
        "filter": [
          "admin",
          "protect",
          "security",
          "status",
          "objects",
          "lock"
        ],
        "prefix": "fas"
      },
      {
        "name": "location-arrow",
        "id": "location-arrow",
        "filter": [
          "address",
          "coordinates",
          "gps",
          "location",
          "map",
          "place",
          "where",
          "arrows",
          "maps",
          "location-arrow"
        ],
        "prefix": "fas"
      },
      {
        "name": "list-ul",
        "id": "list-ul",
        "filter": [
          "checklist",
          "list",
          "ol",
          "todo",
          "ul",
          "editors",
          "list-ul"
        ],
        "prefix": "fas"
      },
      {
        "name": "list-ol",
        "id": "list-ol",
        "filter": [
          "checklist",
          "list",
          "list",
          "numbers",
          "ol",
          "todo",
          "ul",
          "editors",
          "list-ol"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate List",
        "id": "list-alt",
        "filter": [
          "checklist",
          "completed",
          "done",
          "finished",
          "ol",
          "todo",
          "ul",
          "editors",
          "list-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "List",
        "id": "list",
        "filter": [
          "checklist",
          "completed",
          "done",
          "finished",
          "ol",
          "todo",
          "ul",
          "editors",
          "list"
        ],
        "prefix": "fas"
      },
      {
        "name": "Turkish Lira Sign",
        "id": "lira-sign",
        "filter": [
          "try",
          "try",
          "turkish",
          "currency",
          "lira-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Linux",
        "id": "linux",
        "filter": [
          "tux",
          "linux"
        ],
        "prefix": "fab"
      },
      {
        "name": "Linode",
        "id": "linode",
        "filter": [
          "linode"
        ],
        "prefix": "fab"
      },
      {
        "name": "LinkedIn In",
        "id": "linkedin-in",
        "filter": [
          "linkedin",
          "linkedin-in"
        ],
        "prefix": "fab"
      },
      {
        "name": "LinkedIn",
        "id": "linkedin",
        "filter": [
          "linkedin-square",
          "linkedin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Link",
        "id": "link",
        "filter": [
          "chain",
          "editors",
          "link"
        ],
        "prefix": "fas"
      },
      {
        "name": "Line",
        "id": "line",
        "filter": [
          "line"
        ],
        "prefix": "fab"
      },
      {
        "name": "Lightbulb",
        "id": "lightbulb",
        "filter": [
          "idea",
          "inspiration",
          "objects",
          "maps",
          "lightbulb"
        ],
        "prefix": "fas"
      },
      {
        "name": "Life Ring",
        "id": "life-ring",
        "filter": [
          "support",
          "spinners",
          "objects",
          "maps",
          "life-ring"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Level Up",
        "id": "level-up-alt",
        "filter": [
          "level-up",
          "arrows",
          "level-up-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Level Down",
        "id": "level-down-alt",
        "filter": [
          "level-down",
          "arrows",
          "level-down-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Less Than Equal To",
        "id": "less-than-equal",
        "filter": [
          "mathematics",
          "less-than-equal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Less Than",
        "id": "less-than",
        "filter": [
          "mathematics",
          "less-than"
        ],
        "prefix": "fas"
      },
      {
        "name": "Less",
        "id": "less",
        "filter": [
          "less"
        ],
        "prefix": "fab"
      },
      {
        "name": "Lemon",
        "id": "lemon",
        "filter": [
          "food",
          "objects",
          "maps",
          "lemon"
        ],
        "prefix": "fas"
      },
      {
        "name": "Leanpub",
        "id": "leanpub",
        "filter": [
          "leanpub"
        ],
        "prefix": "fab"
      },
      {
        "name": "leaf",
        "id": "leaf",
        "filter": [
          "eco",
          "nature",
          "plant",
          "charity",
          "objects",
          "maps",
          "leaf"
        ],
        "prefix": "fas"
      },
      {
        "name": "Layer Group",
        "id": "layer-group",
        "filter": [
          "layers",
          "design",
          "maps",
          "layer-group"
        ],
        "prefix": "fas"
      },
      {
        "name": "Laughing Winking Face",
        "id": "laugh-wink",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "laugh-wink"
        ],
        "prefix": "fas"
      },
      {
        "name": "Laughing Squinting Face",
        "id": "laugh-squint",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "laugh-squint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Laugh Face with Beaming Eyes",
        "id": "laugh-beam",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "laugh-beam"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Face With Big Eyes",
        "id": "laugh",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "laugh",
          "emoji"
        ],
        "prefix": "fas"
      },
      {
        "name": "last.fm Square",
        "id": "lastfm-square",
        "filter": [
          "lastfm-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "last.fm",
        "id": "lastfm",
        "filter": [
          "lastfm"
        ],
        "prefix": "fab"
      },
      {
        "name": "Laravel",
        "id": "laravel",
        "filter": [
          "laravel"
        ],
        "prefix": "fab"
      },
      {
        "name": "Laptop Code",
        "id": "laptop-code",
        "filter": [
          "education",
          "laptop-code"
        ],
        "prefix": "fas"
      },
      {
        "name": "Laptop",
        "id": "laptop",
        "filter": [
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
          "computers",
          "objects",
          "laptop"
        ],
        "prefix": "fas"
      },
      {
        "name": "Language",
        "id": "language",
        "filter": [
          "dialect",
          "idiom",
          "localize",
          "speech",
          "translate",
          "vernacular",
          "interfaces",
          "communication",
          "language"
        ],
        "prefix": "fas"
      },
      {
        "name": "KORVUE",
        "id": "korvue",
        "filter": [
          "korvue"
        ],
        "prefix": "fab"
      },
      {
        "name": "Kiwi Bird",
        "id": "kiwi-bird",
        "filter": [
          "animals",
          "kiwi-bird"
        ],
        "prefix": "fas"
      },
      {
        "name": "Face Blowing a Kiss",
        "id": "kiss-wink-heart",
        "filter": [
          "beso",
          "emoticon",
          "face",
          "love",
          "smooch",
          "emoji",
          "kiss-wink-heart"
        ],
        "prefix": "fas"
      },
      {
        "name": "Kissing Face With Smiling Eyes",
        "id": "kiss-beam",
        "filter": [
          "beso",
          "emoticon",
          "face",
          "love",
          "smooch",
          "emoji",
          "kiss-beam"
        ],
        "prefix": "fas"
      },
      {
        "name": "Kissing Face",
        "id": "kiss",
        "filter": [
          "beso",
          "emoticon",
          "face",
          "love",
          "smooch",
          "emoji",
          "kiss"
        ],
        "prefix": "fas"
      },
      {
        "name": "Kickstarter K",
        "id": "kickstarter-k",
        "filter": [
          "kickstarter-k"
        ],
        "prefix": "fab"
      },
      {
        "name": "Kickstarter",
        "id": "kickstarter",
        "filter": [
          "kickstarter"
        ],
        "prefix": "fab"
      },
      {
        "name": "KeyCDN",
        "id": "keycdn",
        "filter": [
          "keycdn"
        ],
        "prefix": "fab"
      },
      {
        "name": "Keyboard",
        "id": "keyboard",
        "filter": [
          "input",
          "type",
          "computers",
          "writing",
          "objects",
          "code",
          "keyboard"
        ],
        "prefix": "fas"
      },
      {
        "name": "Keybase",
        "id": "keybase",
        "filter": [
          "keybase"
        ],
        "prefix": "fab"
      },
      {
        "name": "key",
        "id": "key",
        "filter": [
          "password",
          "unlock",
          "payments-shopping",
          "objects",
          "maps",
          "key"
        ],
        "prefix": "fas"
      },
      {
        "name": "Kaggle",
        "id": "kaggle",
        "filter": [
          "kaggle"
        ],
        "prefix": "fab"
      },
      {
        "name": "jsFiddle",
        "id": "jsfiddle",
        "filter": [
          "jsfiddle"
        ],
        "prefix": "fab"
      },
      {
        "name": "JavaScript (JS) Square",
        "id": "js-square",
        "filter": [
          "js-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "JavaScript (JS)",
        "id": "js",
        "filter": [
          "js"
        ],
        "prefix": "fab"
      },
      {
        "name": "Joomla Logo",
        "id": "joomla",
        "filter": [
          "joomla"
        ],
        "prefix": "fab"
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
          "medical",
          "joint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Joget",
        "id": "joget",
        "filter": [
          "joget"
        ],
        "prefix": "fab"
      },
      {
        "name": "Jenkis",
        "id": "jenkins",
        "filter": [
          "jenkins"
        ],
        "prefix": "fab"
      },
      {
        "name": "Jedi Order",
        "id": "jedi-order",
        "filter": [
          "jedi-order"
        ],
        "prefix": "fab"
      },
      {
        "name": "Java",
        "id": "java",
        "filter": [
          "java"
        ],
        "prefix": "fab"
      },
      {
        "name": "Itunes Note",
        "id": "itunes-note",
        "filter": [
          "itunes-note"
        ],
        "prefix": "fab"
      },
      {
        "name": "iTunes",
        "id": "itunes",
        "filter": [
          "itunes"
        ],
        "prefix": "fab"
      },
      {
        "name": "italic",
        "id": "italic",
        "filter": [
          "italics",
          "editors",
          "italic"
        ],
        "prefix": "fas"
      },
      {
        "name": "ioxhost",
        "id": "ioxhost",
        "filter": [
          "ioxhost"
        ],
        "prefix": "fab"
      },
      {
        "name": "Internet-explorer",
        "id": "internet-explorer",
        "filter": [
          "browser",
          "ie",
          "internet-explorer"
        ],
        "prefix": "fab"
      },
      {
        "name": "Instagram",
        "id": "instagram",
        "filter": [
          "instagram"
        ],
        "prefix": "fab"
      },
      {
        "name": "Info Circle",
        "id": "info-circle",
        "filter": [
          "details",
          "help",
          "information",
          "more",
          "status",
          "interfaces",
          "maps",
          "info-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Info",
        "id": "info",
        "filter": [
          "details",
          "help",
          "information",
          "more",
          "status",
          "interfaces",
          "maps",
          "info"
        ],
        "prefix": "fas"
      },
      {
        "name": "Infinity",
        "id": "infinity",
        "filter": [
          "infinity"
        ],
        "prefix": "fas"
      },
      {
        "name": "Industry",
        "id": "industry",
        "filter": [
          "factory",
          "manufacturing",
          "buildings",
          "business",
          "objects",
          "maps",
          "industry"
        ],
        "prefix": "fas"
      },
      {
        "name": "Indent",
        "id": "indent",
        "filter": [
          "editors",
          "indent"
        ],
        "prefix": "fas"
      },
      {
        "name": "inbox",
        "id": "inbox",
        "filter": [
          "communication",
          "inbox"
        ],
        "prefix": "fas"
      },
      {
        "name": "IMDB",
        "id": "imdb",
        "filter": [
          "imdb"
        ],
        "prefix": "fab"
      },
      {
        "name": "Images",
        "id": "images",
        "filter": [
          "album",
          "photo",
          "picture",
          "images",
          "objects",
          "maps"
        ],
        "prefix": "fas"
      },
      {
        "name": "Image",
        "id": "image",
        "filter": [
          "album",
          "photo",
          "picture",
          "picture",
          "images",
          "objects",
          "maps",
          "image"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Identification Card",
        "id": "id-card-alt",
        "filter": [
          "demographics",
          "users-people",
          "medical",
          "id-card-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Identification Card",
        "id": "id-card",
        "filter": [
          "document",
          "identification",
          "issued",
          "users-people",
          "images",
          "id-card"
        ],
        "prefix": "fas"
      },
      {
        "name": "Identification Badge",
        "id": "id-badge",
        "filter": [
          "users-people",
          "images",
          "id-badge"
        ],
        "prefix": "fas"
      },
      {
        "name": "I Beam Cursor",
        "id": "i-cursor",
        "filter": [
          "interfaces",
          "editors",
          "i-cursor"
        ],
        "prefix": "fas"
      },
      {
        "name": "HubSpot",
        "id": "hubspot",
        "filter": [
          "hubspot"
        ],
        "prefix": "fab"
      },
      {
        "name": "HTML 5 Logo",
        "id": "html5",
        "filter": [
          "html5"
        ],
        "prefix": "fab"
      },
      {
        "name": "Houzz",
        "id": "houzz",
        "filter": [
          "houzz"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hourglass Start",
        "id": "hourglass-start",
        "filter": [
          "date-time",
          "hourglass-start"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hourglass Half",
        "id": "hourglass-half",
        "filter": [
          "date-time",
          "hourglass-half"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hourglass End",
        "id": "hourglass-end",
        "filter": [
          "date-time",
          "hourglass-end"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hourglass",
        "id": "hourglass",
        "filter": [
          "date-time",
          "objects",
          "hourglass"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hotjar",
        "id": "hotjar",
        "filter": [
          "hotjar"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hotel",
        "id": "hotel",
        "filter": [
          "building",
          "lodging",
          "travel",
          "hotel"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hot Tub",
        "id": "hot-tub",
        "filter": [
          "travel",
          "hot-tub"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hospital Symbol",
        "id": "hospital-symbol",
        "filter": [
          "medical",
          "hospital-symbol"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Hospital",
        "id": "hospital-alt",
        "filter": [
          "building",
          "emergency room",
          "medical center",
          "buildings",
          "medical",
          "hospital-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "hospital",
        "id": "hospital",
        "filter": [
          "building",
          "emergency room",
          "medical center",
          "buildings",
          "medical",
          "health",
          "objects",
          "maps",
          "hospital"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hornbill",
        "id": "hornbill",
        "filter": [
          "hornbill"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hooli",
        "id": "hooli",
        "filter": [
          "hooli"
        ],
        "prefix": "fab"
      },
      {
        "name": "home",
        "id": "home",
        "filter": [
          "house",
          "main",
          "buildings",
          "interfaces",
          "objects",
          "maps",
          "home"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hockey Puck",
        "id": "hockey-puck",
        "filter": [
          "sports",
          "hockey-puck"
        ],
        "prefix": "fas"
      },
      {
        "name": "History",
        "id": "history",
        "filter": [
          "arrows",
          "interfaces",
          "history"
        ],
        "prefix": "fas"
      },
      {
        "name": "HireAHelper",
        "id": "hire-a-helper",
        "filter": [
          "hire-a-helper"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hips",
        "id": "hips",
        "filter": [
          "hips"
        ],
        "prefix": "fab"
      },
      {
        "name": "Highlighter",
        "id": "highlighter",
        "filter": [
          "edit",
          "marker",
          "sharpie",
          "update",
          "write",
          "design",
          "editors",
          "business",
          "objects",
          "highlighter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Helicopter",
        "id": "helicopter",
        "filter": [
          "airwolf",
          "apache",
          "chopper",
          "flight",
          "fly",
          "vehicles",
          "objects",
          "maps",
          "helicopter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Heartbeat",
        "id": "heartbeat",
        "filter": [
          "ekg",
          "lifeline",
          "vital signs",
          "medical",
          "health",
          "maps",
          "heartbeat"
        ],
        "prefix": "fas"
      },
      {
        "name": "Heart",
        "id": "heart",
        "filter": [
          "favorite",
          "like",
          "love",
          "medical",
          "charity",
          "shapes",
          "interfaces",
          "payments-shopping",
          "health",
          "objects",
          "maps",
          "heart"
        ],
        "prefix": "fas"
      },
      {
        "name": "Headset",
        "id": "headset",
        "filter": [
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
          "objects",
          "headset"
        ],
        "prefix": "fas"
      },
      {
        "name": "Headphones Alt",
        "id": "headphones-alt",
        "filter": [
          "audio",
          "listen",
          "music",
          "sound",
          "speaker",
          "objects",
          "headphones-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "headphones",
        "id": "headphones",
        "filter": [
          "audio",
          "listen",
          "music",
          "sound",
          "speaker",
          "computers",
          "audio-video",
          "objects",
          "headphones"
        ],
        "prefix": "fas"
      },
      {
        "name": "heading",
        "id": "heading",
        "filter": [
          "header",
          "header",
          "editors",
          "heading"
        ],
        "prefix": "fas"
      },
      {
        "name": "HDD",
        "id": "hdd",
        "filter": [
          "cpu",
          "hard drive",
          "harddrive",
          "machine",
          "save",
          "storage",
          "computers",
          "objects",
          "hdd"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hashtag",
        "id": "hashtag",
        "filter": [
          "interfaces",
          "hashtag"
        ],
        "prefix": "fas"
      },
      {
        "name": "Handshake",
        "id": "handshake",
        "filter": [
          "greeting",
          "partnership",
          "charity",
          "hands",
          "payments-shopping",
          "handshake"
        ],
        "prefix": "fas"
      },
      {
        "name": "Helping Hands",
        "id": "hands-helping",
        "filter": [
          "aid",
          "assistance",
          "partnership",
          "volunteering",
          "charity",
          "hands-helping"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hands",
        "id": "hands",
        "filter": [
          "hands"
        ],
        "prefix": "fas"
      },
      {
        "name": "Spock (Hand)",
        "id": "hand-spock",
        "filter": [
          "hands",
          "hand-spock"
        ],
        "prefix": "fas"
      },
      {
        "name": "Scissors (Hand)",
        "id": "hand-scissors",
        "filter": [
          "hands",
          "hand-scissors"
        ],
        "prefix": "fas"
      },
      {
        "name": "Rock (Hand)",
        "id": "hand-rock",
        "filter": [
          "hands",
          "hand-rock"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pointer (Hand)",
        "id": "hand-pointer",
        "filter": [
          "select",
          "arrows",
          "hands",
          "hand-pointer"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Pointing Up",
        "id": "hand-point-up",
        "filter": [
          "finger",
          "hand-o-up",
          "point",
          "arrows",
          "hands",
          "hand-point-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Pointing Right",
        "id": "hand-point-right",
        "filter": [
          "finger",
          "forward",
          "hand-o-right",
          "next",
          "point",
          "right",
          "arrows",
          "hands",
          "hand-point-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Pointing Left",
        "id": "hand-point-left",
        "filter": [
          "back",
          "finger",
          "hand-o-left",
          "left",
          "point",
          "previous",
          "arrows",
          "hands",
          "hand-point-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Pointing Down",
        "id": "hand-point-down",
        "filter": [
          "finger",
          "hand-o-down",
          "point",
          "arrows",
          "hands",
          "hand-point-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Peace (Hand)",
        "id": "hand-peace",
        "filter": [
          "hands",
          "hand-peace"
        ],
        "prefix": "fas"
      },
      {
        "name": "Paper (Hand)",
        "id": "hand-paper",
        "filter": [
          "stop",
          "hands",
          "hand-paper"
        ],
        "prefix": "fas"
      },
      {
        "name": "Lizard (Hand)",
        "id": "hand-lizard",
        "filter": [
          "hands",
          "hand-lizard"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Holding US Dollar",
        "id": "hand-holding-usd",
        "filter": [
          "$",
          "dollar sign",
          "donation",
          "giving",
          "money",
          "price",
          "charity",
          "hand-holding-usd"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Holding Heart",
        "id": "hand-holding-heart",
        "filter": [
          "charity",
          "hand-holding-heart"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hand Holding",
        "id": "hand-holding",
        "filter": [
          "hands",
          "hand-holding"
        ],
        "prefix": "fas"
      },
      {
        "name": "Hackerrank",
        "id": "hackerrank",
        "filter": [
          "hackerrank"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hacker News Square",
        "id": "hacker-news-square",
        "filter": [
          "hacker-news-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Hacker News",
        "id": "hacker-news",
        "filter": [
          "hacker-news"
        ],
        "prefix": "fab"
      },
      {
        "name": "H Square",
        "id": "h-square",
        "filter": [
          "hospital",
          "hotel",
          "health",
          "maps",
          "h-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gulp",
        "id": "gulp",
        "filter": [
          "gulp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Grunt",
        "id": "grunt",
        "filter": [
          "grunt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Gripfire, Inc.",
        "id": "gripfire",
        "filter": [
          "gripfire"
        ],
        "prefix": "fab"
      },
      {
        "name": "Grip Vertical",
        "id": "grip-vertical",
        "filter": [
          "affordance",
          "drag",
          "drop",
          "grab",
          "handle",
          "interfaces",
          "grip-vertical"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grip Horizontal",
        "id": "grip-horizontal",
        "filter": [
          "affordance",
          "drag",
          "drop",
          "grab",
          "handle",
          "interfaces",
          "grip-horizontal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Winking Face",
        "id": "grin-wink",
        "filter": [
          "emoticon",
          "face",
          "flirt",
          "laugh",
          "smile",
          "emoji",
          "grin-wink"
        ],
        "prefix": "fas"
      },
      {
        "name": "Winking Face With Tongue",
        "id": "grin-tongue-wink",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "grin-tongue-wink"
        ],
        "prefix": "fas"
      },
      {
        "name": "Squinting Face With Tongue",
        "id": "grin-tongue-squint",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "grin-tongue-squint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Face With Tongue",
        "id": "grin-tongue",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "grin-tongue"
        ],
        "prefix": "fas"
      },
      {
        "name": "Face With Tears of Joy",
        "id": "grin-tears",
        "filter": [
          "LOL",
          "emoticon",
          "face",
          "emoji",
          "grin-tears"
        ],
        "prefix": "fas"
      },
      {
        "name": "Star-Struck",
        "id": "grin-stars",
        "filter": [
          "emoticon",
          "face",
          "star-struck",
          "emoji",
          "grin-stars"
        ],
        "prefix": "fas"
      },
      {
        "name": "Rolling on the Floor Laughing",
        "id": "grin-squint-tears",
        "filter": [
          "emoticon",
          "face",
          "happy",
          "smile",
          "emoji",
          "grin-squint-tears"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Squinting Face",
        "id": "grin-squint",
        "filter": [
          "emoticon",
          "face",
          "laugh",
          "smile",
          "emoji",
          "grin-squint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Smiling Face With Heart-Eyes",
        "id": "grin-hearts",
        "filter": [
          "emoticon",
          "face",
          "love",
          "smile",
          "emoji",
          "grin-hearts"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Face With Sweat",
        "id": "grin-beam-sweat",
        "filter": [
          "emoticon",
          "face",
          "smile",
          "emoji",
          "grin-beam-sweat"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Face With Smiling Eyes",
        "id": "grin-beam",
        "filter": [
          "emoticon",
          "face",
          "laugh",
          "smile",
          "emoji",
          "grin-beam"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Grinning Face",
        "id": "grin-alt",
        "filter": [
          "emoticon",
          "face",
          "laugh",
          "smile",
          "emoji",
          "grin-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grinning Face",
        "id": "grin",
        "filter": [
          "emoticon",
          "face",
          "laugh",
          "smile",
          "emoji",
          "grin"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grimacing Face",
        "id": "grimace",
        "filter": [
          "cringe",
          "emoticon",
          "face",
          "emoji",
          "grimace"
        ],
        "prefix": "fas"
      },
      {
        "name": "Greater Than Equal To",
        "id": "greater-than-equal",
        "filter": [
          "mathematics",
          "greater-than-equal"
        ],
        "prefix": "fas"
      },
      {
        "name": "Greater Than",
        "id": "greater-than",
        "filter": [
          "mathematics",
          "greater-than"
        ],
        "prefix": "fas"
      },
      {
        "name": "Grav",
        "id": "grav",
        "filter": [
          "grav"
        ],
        "prefix": "fab"
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
        ],
        "prefix": "fab"
      },
      {
        "name": "Graduation Cap",
        "id": "graduation-cap",
        "filter": [
          "learning",
          "school",
          "student",
          "education",
          "objects",
          "maps",
          "graduation-cap"
        ],
        "prefix": "fas"
      },
      {
        "name": "Google Wallet",
        "id": "google-wallet",
        "filter": [
          "payments-shopping",
          "google-wallet"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Plus Square",
        "id": "google-plus-square",
        "filter": [
          "social network",
          "google-plus-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Plus G",
        "id": "google-plus-g",
        "filter": [
          "google-plus",
          "social network",
          "google-plus-g"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Plus",
        "id": "google-plus",
        "filter": [
          "google-plus-circle",
          "google-plus-official",
          "google-plus"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Play",
        "id": "google-play",
        "filter": [
          "google-play"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Drive",
        "id": "google-drive",
        "filter": [
          "google-drive"
        ],
        "prefix": "fab"
      },
      {
        "name": "Google Logo",
        "id": "google",
        "filter": [
          "google"
        ],
        "prefix": "fab"
      },
      {
        "name": "Goodreads G",
        "id": "goodreads-g",
        "filter": [
          "goodreads-g"
        ],
        "prefix": "fab"
      },
      {
        "name": "Goodreads",
        "id": "goodreads",
        "filter": [
          "goodreads"
        ],
        "prefix": "fab"
      },
      {
        "name": "Golf Ball",
        "id": "golf-ball",
        "filter": [
          "sports",
          "golf-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gofore",
        "id": "gofore",
        "filter": [
          "gofore"
        ],
        "prefix": "fab"
      },
      {
        "name": "Globe with Asia shown",
        "id": "globe-asia",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Globe with Americas shown",
        "id": "globe-americas",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Globe with Africa shown",
        "id": "globe-africa",
        "filter": [
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Globe",
        "id": "globe",
        "filter": [
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
          "charity",
          "business",
          "objects",
          "maps",
          "globe"
        ],
        "prefix": "fas"
      },
      {
        "name": "Glide G",
        "id": "glide-g",
        "filter": [
          "glide-g"
        ],
        "prefix": "fab"
      },
      {
        "name": "Glide",
        "id": "glide",
        "filter": [
          "glide"
        ],
        "prefix": "fab"
      },
      {
        "name": "Glasses",
        "id": "glasses",
        "filter": [
          "foureyes",
          "hipster",
          "nerd",
          "reading",
          "sight",
          "spectacles",
          "interfaces",
          "editors",
          "business",
          "objects",
          "glasses"
        ],
        "prefix": "fas"
      },
      {
        "name": "Glass Martini-alt",
        "id": "glass-martini-alt",
        "filter": [
          "travel",
          "glass-martini-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Martini Glass",
        "id": "glass-martini",
        "filter": [
          "alcohol",
          "bar",
          "drink",
          "glass",
          "liquor",
          "martini",
          "travel",
          "objects",
          "maps",
          "glass-martini"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gitter",
        "id": "gitter",
        "filter": [
          "gitter"
        ],
        "prefix": "fab"
      },
      {
        "name": "GitLab",
        "id": "gitlab",
        "filter": [
          "Axosoft",
          "gitlab"
        ],
        "prefix": "fab"
      },
      {
        "name": "GitKraken",
        "id": "gitkraken",
        "filter": [
          "gitkraken"
        ],
        "prefix": "fab"
      },
      {
        "name": "GitHub Square",
        "id": "github-square",
        "filter": [
          "octocat",
          "github-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate GitHub",
        "id": "github-alt",
        "filter": [
          "octocat",
          "github-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "GitHub",
        "id": "github",
        "filter": [
          "octocat",
          "github"
        ],
        "prefix": "fab"
      },
      {
        "name": "Git Square",
        "id": "git-square",
        "filter": [
          "git-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Git",
        "id": "git",
        "filter": [
          "git"
        ],
        "prefix": "fab"
      },
      {
        "name": "gift",
        "id": "gift",
        "filter": [
          "generosity",
          "giving",
          "party",
          "present",
          "wrapped",
          "charity",
          "payments-shopping",
          "objects",
          "maps",
          "gift"
        ],
        "prefix": "fas"
      },
      {
        "name": "GG Currency Circle",
        "id": "gg-circle",
        "filter": [
          "currency",
          "gg-circle"
        ],
        "prefix": "fab"
      },
      {
        "name": "GG Currency",
        "id": "gg",
        "filter": [
          "currency",
          "gg"
        ],
        "prefix": "fab"
      },
      {
        "name": "Get Pocket",
        "id": "get-pocket",
        "filter": [
          "get-pocket"
        ],
        "prefix": "fab"
      },
      {
        "name": "Genderless",
        "id": "genderless",
        "filter": [
          "gender",
          "genderless"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gem",
        "id": "gem",
        "filter": [
          "diamond",
          "payments-shopping",
          "objects",
          "gem"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gavel",
        "id": "gavel",
        "filter": [
          "hammer",
          "judge",
          "lawyer",
          "opinion",
          "objects",
          "maps",
          "gavel"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gas Pump",
        "id": "gas-pump",
        "filter": [
          "automotive",
          "gas-pump"
        ],
        "prefix": "fas"
      },
      {
        "name": "Gamepad",
        "id": "gamepad",
        "filter": [
          "controller",
          "objects",
          "maps",
          "gamepad"
        ],
        "prefix": "fas"
      },
      {
        "name": "Galactic Senate",
        "id": "galactic-senate",
        "filter": [
          "galactic-senate"
        ],
        "prefix": "fab"
      },
      {
        "name": "Galactic Republic",
        "id": "galactic-republic",
        "filter": [
          "galactic-republic"
        ],
        "prefix": "fab"
      },
      {
        "name": "Futbol",
        "id": "futbol",
        "filter": [
          "ball",
          "football",
          "soccer",
          "sports",
          "objects",
          "futbol"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fulcrum",
        "id": "fulcrum",
        "filter": [
          "fulcrum"
        ],
        "prefix": "fab"
      },
      {
        "name": "Frowning Face With Open Mouth",
        "id": "frown-open",
        "filter": [
          "disapprove",
          "emoticon",
          "face",
          "rating",
          "sad",
          "emoji",
          "frown-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "Frowning Face",
        "id": "frown",
        "filter": [
          "disapprove",
          "emoticon",
          "face",
          "rating",
          "sad",
          "users-people",
          "chat",
          "interfaces",
          "emoji",
          "frown"
        ],
        "prefix": "fas"
      },
      {
        "name": "Frog",
        "id": "frog",
        "filter": [
          "bullfrog",
          "kermit",
          "kiss",
          "prince",
          "toad",
          "wart",
          "animals",
          "frog"
        ],
        "prefix": "fas"
      },
      {
        "name": "FreeBSD",
        "id": "freebsd",
        "filter": [
          "freebsd"
        ],
        "prefix": "fab"
      },
      {
        "name": "Free Code Camp",
        "id": "free-code-camp",
        "filter": [
          "free-code-camp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Foursquare",
        "id": "foursquare",
        "filter": [
          "foursquare"
        ],
        "prefix": "fab"
      },
      {
        "name": "forward",
        "id": "forward",
        "filter": [
          "forward",
          "next",
          "audio-video"
        ],
        "prefix": "fas"
      },
      {
        "name": "Forumbee",
        "id": "forumbee",
        "filter": [
          "forumbee"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Fort Awesome",
        "id": "fort-awesome-alt",
        "filter": [
          "castle",
          "fort-awesome-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Fort Awesome",
        "id": "fort-awesome",
        "filter": [
          "castle",
          "fort-awesome"
        ],
        "prefix": "fab"
      },
      {
        "name": "Football Ball",
        "id": "football-ball",
        "filter": [
          "sports",
          "football-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fonticons Fi",
        "id": "fonticons-fi",
        "filter": [
          "fonticons-fi"
        ],
        "prefix": "fab"
      },
      {
        "name": "Fonticons",
        "id": "fonticons",
        "filter": [
          "fonticons"
        ],
        "prefix": "fab"
      },
      {
        "name": "Font Awesome Flag",
        "id": "font-awesome-flag",
        "filter": [
          "font-awesome-flag"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Font Awesome",
        "id": "font-awesome-alt",
        "filter": [
          "font-awesome-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Font Awesome",
        "id": "font-awesome",
        "filter": [
          "meanpath",
          "font-awesome"
        ],
        "prefix": "fab"
      },
      {
        "name": "font",
        "id": "font",
        "filter": [
          "text",
          "editors",
          "font"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Fly",
        "id": "fly",
        "filter": [
          "fly"
        ],
        "prefix": "fab"
      },
      {
        "name": "Flushed Face",
        "id": "flushed",
        "filter": [
          "embarrassed",
          "emoticon",
          "face",
          "emoji",
          "flushed"
        ],
        "prefix": "fas"
      },
      {
        "name": "Flipboard",
        "id": "flipboard",
        "filter": [
          "flipboard"
        ],
        "prefix": "fab"
      },
      {
        "name": "Flickr",
        "id": "flickr",
        "filter": [
          "flickr"
        ],
        "prefix": "fab"
      },
      {
        "name": "Flask",
        "id": "flask",
        "filter": [
          "beaker",
          "experimental",
          "labs",
          "science",
          "objects",
          "maps",
          "flask"
        ],
        "prefix": "fas"
      },
      {
        "name": "flag-checkered",
        "id": "flag-checkered",
        "filter": [
          "notice",
          "notification",
          "notify",
          "report",
          "interfaces",
          "objects",
          "maps",
          "flag-checkered"
        ],
        "prefix": "fas"
      },
      {
        "name": "flag",
        "id": "flag",
        "filter": [
          "notice",
          "notification",
          "notify",
          "report",
          "interfaces",
          "objects",
          "maps",
          "flag"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fish",
        "id": "fish",
        "filter": [
          "animals",
          "fish"
        ],
        "prefix": "fas"
      },
      {
        "name": "firstdraft",
        "id": "firstdraft",
        "filter": [
          "firstdraft"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate First Order",
        "id": "first-order-alt",
        "filter": [
          "first-order-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "First Order",
        "id": "first-order",
        "filter": [
          "first-order"
        ],
        "prefix": "fab"
      },
      {
        "name": "First Aid",
        "id": "first-aid",
        "filter": [
          "medical",
          "first-aid"
        ],
        "prefix": "fas"
      },
      {
        "name": "Firefox",
        "id": "firefox",
        "filter": [
          "browser",
          "firefox"
        ],
        "prefix": "fab"
      },
      {
        "name": "fire-extinguisher",
        "id": "fire-extinguisher",
        "filter": [
          "objects",
          "maps",
          "code",
          "fire-extinguisher"
        ],
        "prefix": "fas"
      },
      {
        "name": "fire",
        "id": "fire",
        "filter": [
          "flame",
          "hot",
          "popular",
          "objects",
          "maps",
          "fire"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fingerprint",
        "id": "fingerprint",
        "filter": [
          "human",
          "id",
          "identification",
          "lock",
          "smudge",
          "touch",
          "unique",
          "unlock",
          "interfaces",
          "fingerprint"
        ],
        "prefix": "fas"
      },
      {
        "name": "Filter",
        "id": "filter",
        "filter": [
          "funnel",
          "options",
          "interfaces",
          "code",
          "filter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Film",
        "id": "film",
        "filter": [
          "movie",
          "images",
          "audio-video",
          "objects",
          "film"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fill Drip",
        "id": "fill-drip",
        "filter": [
          "bucket",
          "color",
          "drop",
          "paint",
          "paint bucket",
          "spill",
          "design",
          "fill-drip"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fill",
        "id": "fill",
        "filter": [
          "bucket",
          "color",
          "paint",
          "paint bucket",
          "design",
          "fill"
        ],
        "prefix": "fas"
      },
      {
        "name": "Word File",
        "id": "file-word",
        "filter": [
          "files",
          "file-word"
        ],
        "prefix": "fas"
      },
      {
        "name": "Video File",
        "id": "file-video",
        "filter": [
          "files",
          "audio-video",
          "file-video"
        ],
        "prefix": "fas"
      },
      {
        "name": "File Upload",
        "id": "file-upload",
        "filter": [
          "interfaces",
          "file-upload"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "File Prescription",
        "id": "file-prescription",
        "filter": [
          "drugs",
          "medical",
          "medicine",
          "rx",
          "objects",
          "file-prescription"
        ],
        "prefix": "fas"
      },
      {
        "name": "Powerpoint File",
        "id": "file-powerpoint",
        "filter": [
          "files",
          "file-powerpoint"
        ],
        "prefix": "fas"
      },
      {
        "name": "PDF File",
        "id": "file-pdf",
        "filter": [
          "files",
          "file-pdf"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Medical File",
        "id": "file-medical-alt",
        "filter": [
          "medical",
          "file-medical-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Medical File",
        "id": "file-medical",
        "filter": [
          "medical",
          "file-medical"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "File Invoice",
        "id": "file-invoice",
        "filter": [
          "bill",
          "document",
          "receipt",
          "file-invoice"
        ],
        "prefix": "fas"
      },
      {
        "name": "File Import",
        "id": "file-import",
        "filter": [
          "interfaces",
          "file-import"
        ],
        "prefix": "fas"
      },
      {
        "name": "Image File",
        "id": "file-image",
        "filter": [
          "files",
          "images",
          "file-image"
        ],
        "prefix": "fas"
      },
      {
        "name": "File Export",
        "id": "file-export",
        "filter": [
          "interfaces",
          "file-export"
        ],
        "prefix": "fas"
      },
      {
        "name": "Excel File",
        "id": "file-excel",
        "filter": [
          "files",
          "file-excel"
        ],
        "prefix": "fas"
      },
      {
        "name": "File Download",
        "id": "file-download",
        "filter": [
          "interfaces",
          "file-download"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "Code File",
        "id": "file-code",
        "filter": [
          "files",
          "code",
          "file-code"
        ],
        "prefix": "fas"
      },
      {
        "name": "Audio File",
        "id": "file-audio",
        "filter": [
          "files",
          "audio-video",
          "file-audio"
        ],
        "prefix": "fas"
      },
      {
        "name": "Archive File",
        "id": "file-archive",
        "filter": [
          ".zip",
          "bundle",
          "compress",
          "compression",
          "download",
          "zip",
          "files",
          "file-archive"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate File",
        "id": "file-alt",
        "filter": [
          "document",
          "file-text",
          "invoice",
          "new",
          "page",
          "pdf",
          "files",
          "status",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "code",
          "file-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "File",
        "id": "file",
        "filter": [
          "document",
          "new",
          "page",
          "pdf",
          "resume",
          "files",
          "status",
          "shapes",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "code",
          "file"
        ],
        "prefix": "fas"
      },
      {
        "name": "fighter-jet",
        "id": "fighter-jet",
        "filter": [
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
          "vehicles",
          "objects",
          "maps",
          "fighter-jet"
        ],
        "prefix": "fas"
      },
      {
        "name": "Female",
        "id": "female",
        "filter": [
          "human",
          "person",
          "profile",
          "user",
          "woman",
          "users-people",
          "female"
        ],
        "prefix": "fas"
      },
      {
        "name": "Feather Alt",
        "id": "feather-alt",
        "filter": [
          "bird",
          "light",
          "plucked",
          "quill",
          "animals",
          "objects",
          "feather-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Feather",
        "id": "feather",
        "filter": [
          "bird",
          "light",
          "plucked",
          "quill",
          "animals",
          "objects",
          "feather"
        ],
        "prefix": "fas"
      },
      {
        "name": "Fax",
        "id": "fax",
        "filter": [
          "communication",
          "business",
          "objects",
          "fax"
        ],
        "prefix": "fas"
      },
      {
        "name": "fast-forward",
        "id": "fast-forward",
        "filter": [
          "end",
          "last",
          "next",
          "audio-video",
          "fast-forward"
        ],
        "prefix": "fas"
      },
      {
        "name": "fast-backward",
        "id": "fast-backward",
        "filter": [
          "beginning",
          "first",
          "previous",
          "rewind",
          "start",
          "audio-video",
          "fast-backward"
        ],
        "prefix": "fas"
      },
      {
        "name": "Facebook Square",
        "id": "facebook-square",
        "filter": [
          "social network",
          "facebook-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Facebook Messenger",
        "id": "facebook-messenger",
        "filter": [
          "facebook-messenger"
        ],
        "prefix": "fab"
      },
      {
        "name": "Facebook F",
        "id": "facebook-f",
        "filter": [
          "facebook",
          "facebook-f"
        ],
        "prefix": "fab"
      },
      {
        "name": "Facebook",
        "id": "facebook",
        "filter": [
          "facebook-official",
          "social network",
          "facebook"
        ],
        "prefix": "fab"
      },
      {
        "name": "Eye Slash",
        "id": "eye-slash",
        "filter": [
          "blind",
          "hide",
          "show",
          "toggle",
          "unseen",
          "views",
          "visible",
          "visiblity",
          "images",
          "status",
          "design",
          "interfaces",
          "maps",
          "eye-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Eye Dropper",
        "id": "eye-dropper",
        "filter": [
          "eyedropper",
          "images",
          "design",
          "objects",
          "eye-dropper"
        ],
        "prefix": "fas"
      },
      {
        "name": "Eye",
        "id": "eye",
        "filter": [
          "optic",
          "see",
          "seen",
          "show",
          "sight",
          "views",
          "visible",
          "images",
          "status",
          "design",
          "interfaces",
          "objects",
          "maps",
          "eye"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate External Link Square",
        "id": "external-link-square-alt",
        "filter": [
          "external-link-square",
          "new",
          "open",
          "arrows",
          "interfaces",
          "external-link-square-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate External Link",
        "id": "external-link-alt",
        "filter": [
          "external-link",
          "new",
          "open",
          "arrows",
          "interfaces",
          "external-link-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "ExpeditedSSL",
        "id": "expeditedssl",
        "filter": [
          "expeditedssl"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Expand Arrows",
        "id": "expand-arrows-alt",
        "filter": [
          "arrows-alt",
          "bigger",
          "enlarge",
          "move",
          "resize",
          "arrows",
          "audio-video",
          "expand-arrows-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Expand",
        "id": "expand",
        "filter": [
          "bigger",
          "enlarge",
          "resize",
          "images",
          "audio-video",
          "expand"
        ],
        "prefix": "fas"
      },
      {
        "name": "Exclamation Triangle",
        "id": "exclamation-triangle",
        "filter": [
          "alert",
          "danger",
          "error",
          "important",
          "notice",
          "notification",
          "notify",
          "problem",
          "warning",
          "status",
          "interfaces",
          "exclamation-triangle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Exclamation Circle",
        "id": "exclamation-circle",
        "filter": [
          "alert",
          "danger",
          "error",
          "important",
          "notice",
          "notification",
          "notify",
          "problem",
          "warning",
          "status",
          "interfaces",
          "exclamation-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "exclamation",
        "id": "exclamation",
        "filter": [
          "alert",
          "danger",
          "error",
          "important",
          "notice",
          "notification",
          "notify",
          "problem",
          "warning",
          "status",
          "interfaces",
          "exclamation"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Exchange",
        "id": "exchange-alt",
        "filter": [
          "arrow",
          "arrows",
          "exchange",
          "reciprocate",
          "return",
          "swap",
          "transfer",
          "exchange-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Euro Sign",
        "id": "euro-sign",
        "filter": [
          "eur",
          "eur",
          "currency",
          "euro-sign"
        ],
        "prefix": "fas"
      },
      {
        "name": "Etsy",
        "id": "etsy",
        "filter": [
          "etsy"
        ],
        "prefix": "fab"
      },
      {
        "name": "Ethereum",
        "id": "ethereum",
        "filter": [
          "payments-shopping",
          "ethereum"
        ],
        "prefix": "fab"
      },
      {
        "name": "Erlang",
        "id": "erlang",
        "filter": [
          "erlang"
        ],
        "prefix": "fab"
      },
      {
        "name": "eraser",
        "id": "eraser",
        "filter": [
          "delete",
          "remove",
          "design",
          "writing",
          "interfaces",
          "editors",
          "business",
          "objects",
          "eraser"
        ],
        "prefix": "fas"
      },
      {
        "name": "Equals",
        "id": "equals",
        "filter": [
          "mathematics",
          "equals"
        ],
        "prefix": "fas"
      },
      {
        "name": "Envira Gallery",
        "id": "envira",
        "filter": [
          "leaf",
          "envira"
        ],
        "prefix": "fab"
      },
      {
        "name": "Envelope Square",
        "id": "envelope-square",
        "filter": [
          "e-mail",
          "email",
          "letter",
          "mail",
          "message",
          "notification",
          "support",
          "communication",
          "business",
          "envelope-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Envelope Open",
        "id": "envelope-open",
        "filter": [
          "e-mail",
          "email",
          "letter",
          "mail",
          "message",
          "notification",
          "support",
          "writing",
          "interfaces",
          "communication",
          "business",
          "objects",
          "envelope-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "Envelope",
        "id": "envelope",
        "filter": [
          "e-mail",
          "email",
          "letter",
          "mail",
          "message",
          "notification",
          "support",
          "writing",
          "interfaces",
          "communication",
          "business",
          "objects",
          "envelope"
        ],
        "prefix": "fas"
      },
      {
        "name": "Galactic Empire",
        "id": "empire",
        "filter": [
          "empire"
        ],
        "prefix": "fab"
      },
      {
        "name": "Ember",
        "id": "ember",
        "filter": [
          "ember"
        ],
        "prefix": "fab"
      },
      {
        "name": "Ello",
        "id": "ello",
        "filter": [
          "ello"
        ],
        "prefix": "fab"
      },
      {
        "name": "Vertical Ellipsis",
        "id": "ellipsis-v",
        "filter": [
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
          "interfaces",
          "ellipsis-v"
        ],
        "prefix": "fas"
      },
      {
        "name": "Horizontal Ellipsis",
        "id": "ellipsis-h",
        "filter": [
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
          "interfaces",
          "ellipsis-h"
        ],
        "prefix": "fas"
      },
      {
        "name": "Elementor",
        "id": "elementor",
        "filter": [
          "elementor"
        ],
        "prefix": "fab"
      },
      {
        "name": "eject",
        "id": "eject",
        "filter": [
          "audio-video",
          "eject"
        ],
        "prefix": "fas"
      },
      {
        "name": "Edit",
        "id": "edit",
        "filter": [
          "edit",
          "pen",
          "pencil",
          "update",
          "write",
          "design",
          "writing",
          "interfaces",
          "editors",
          "business"
        ],
        "prefix": "fas"
      },
      {
        "name": "Edge Browser",
        "id": "edge",
        "filter": [
          "browser",
          "ie",
          "edge"
        ],
        "prefix": "fab"
      },
      {
        "name": "eBay",
        "id": "ebay",
        "filter": [
          "ebay"
        ],
        "prefix": "fab"
      },
      {
        "name": "Earlybirds",
        "id": "earlybirds",
        "filter": [
          "earlybirds"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dyalog",
        "id": "dyalog",
        "filter": [
          "dyalog"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dumbbell",
        "id": "dumbbell",
        "filter": [
          "exercise",
          "gym",
          "strength",
          "weight",
          "weight-lifting",
          "travel",
          "sports",
          "dumbbell"
        ],
        "prefix": "fas"
      },
      {
        "name": "Drupal Logo",
        "id": "drupal",
        "filter": [
          "drupal"
        ],
        "prefix": "fab"
      },
      {
        "name": "Drum Steelpan",
        "id": "drum-steelpan",
        "filter": [
          "calypso",
          "instrument",
          "music",
          "percussion",
          "reggae",
          "snare",
          "sound",
          "steel",
          "tropical",
          "objects",
          "drum-steelpan"
        ],
        "prefix": "fas"
      },
      {
        "name": "Drum",
        "id": "drum",
        "filter": [
          "instrument",
          "music",
          "percussion",
          "snare",
          "sound",
          "objects",
          "drum"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dropbox",
        "id": "dropbox",
        "filter": [
          "dropbox"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dribbble Square",
        "id": "dribbble-square",
        "filter": [
          "dribbble-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dribbble",
        "id": "dribbble",
        "filter": [
          "dribbble"
        ],
        "prefix": "fab"
      },
      {
        "name": "Draw Polygon",
        "id": "draw-polygon",
        "filter": [
          "design",
          "maps",
          "draw-polygon"
        ],
        "prefix": "fas"
      },
      {
        "name": "Drafting Compass",
        "id": "drafting-compass",
        "filter": [
          "mechanical drawing",
          "plot",
          "plotting",
          "design",
          "drafting-compass"
        ],
        "prefix": "fas"
      },
      {
        "name": "Draft2digital",
        "id": "draft2digital",
        "filter": [
          "draft2digital"
        ],
        "prefix": "fab"
      },
      {
        "name": "Download",
        "id": "download",
        "filter": [
          "import",
          "computers",
          "arrows",
          "interfaces",
          "download"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dove",
        "id": "dove",
        "filter": [
          "animals",
          "charity",
          "dove"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dot Circle",
        "id": "dot-circle",
        "filter": [
          "bullseye",
          "notification",
          "target",
          "interfaces",
          "dot-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Door Open",
        "id": "door-open",
        "filter": [
          "status",
          "objects",
          "door-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "Door Closed",
        "id": "door-closed",
        "filter": [
          "status",
          "objects",
          "door-closed"
        ],
        "prefix": "fas"
      },
      {
        "name": "Donate",
        "id": "donate",
        "filter": [
          "generosity",
          "give",
          "charity",
          "donate"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dolly Flatbed",
        "id": "dolly-flatbed",
        "filter": [
          "logistics",
          "dolly-flatbed"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dolly",
        "id": "dolly",
        "filter": [
          "logistics",
          "moving",
          "dolly"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dollar Sign",
        "id": "dollar-sign",
        "filter": [
          "$",
          "dollar-sign",
          "money",
          "price",
          "usd",
          "charity",
          "currency",
          "maps"
        ],
        "prefix": "fas"
      },
      {
        "name": "Docker",
        "id": "docker",
        "filter": [
          "docker"
        ],
        "prefix": "fab"
      },
      {
        "name": "DocHub",
        "id": "dochub",
        "filter": [
          "dochub"
        ],
        "prefix": "fab"
      },
      {
        "name": "DNA",
        "id": "dna",
        "filter": [
          "double helix",
          "helix",
          "medical",
          "dna"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dizzy Face",
        "id": "dizzy",
        "filter": [
          "dazed",
          "disapprove",
          "emoticon",
          "face",
          "emoji",
          "dizzy"
        ],
        "prefix": "fas"
      },
      {
        "name": "Divide",
        "id": "divide",
        "filter": [
          "mathematics",
          "divide"
        ],
        "prefix": "fas"
      },
      {
        "name": "Discourse",
        "id": "discourse",
        "filter": [
          "discourse"
        ],
        "prefix": "fab"
      },
      {
        "name": "Discord",
        "id": "discord",
        "filter": [
          "discord"
        ],
        "prefix": "fab"
      },
      {
        "name": "Directions",
        "id": "directions",
        "filter": [
          "maps",
          "directions"
        ],
        "prefix": "fas"
      },
      {
        "name": "Digital Tachograph",
        "id": "digital-tachograph",
        "filter": [
          "objects",
          "digital-tachograph"
        ],
        "prefix": "fas"
      },
      {
        "name": "Digital Ocean",
        "id": "digital-ocean",
        "filter": [
          "digital-ocean"
        ],
        "prefix": "fab"
      },
      {
        "name": "Digg Logo",
        "id": "digg",
        "filter": [
          "digg"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dice Two",
        "id": "dice-two",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-two"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice Three",
        "id": "dice-three",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-three"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice Six",
        "id": "dice-six",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-six"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice One",
        "id": "dice-one",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-one"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice Four",
        "id": "dice-four",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-four"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice Five",
        "id": "dice-five",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice-five"
        ],
        "prefix": "fas"
      },
      {
        "name": "Dice",
        "id": "dice",
        "filter": [
          "chance",
          "gambling",
          "game",
          "roll",
          "objects",
          "dice"
        ],
        "prefix": "fas"
      },
      {
        "name": "Diagnoses",
        "id": "diagnoses",
        "filter": [
          "medical",
          "diagnoses"
        ],
        "prefix": "fas"
      },
      {
        "name": "deviantART",
        "id": "deviantart",
        "filter": [
          "deviantart"
        ],
        "prefix": "fab"
      },
      {
        "name": "Desktop",
        "id": "desktop",
        "filter": [
          "computer",
          "cpu",
          "demo",
          "desktop",
          "device",
          "machine",
          "monitor",
          "pc",
          "screen",
          "computers"
        ],
        "prefix": "fas"
      },
      {
        "name": "Deskpro",
        "id": "deskpro",
        "filter": [
          "deskpro"
        ],
        "prefix": "fab"
      },
      {
        "name": "deploy.dog",
        "id": "deploydog",
        "filter": [
          "deploydog"
        ],
        "prefix": "fab"
      },
      {
        "name": "Delicious Logo",
        "id": "delicious",
        "filter": [
          "delicious"
        ],
        "prefix": "fab"
      },
      {
        "name": "Deaf",
        "id": "deaf",
        "filter": [
          "accessibility",
          "deaf"
        ],
        "prefix": "fas"
      },
      {
        "name": "Database",
        "id": "database",
        "filter": [
          "computers",
          "interfaces",
          "database"
        ],
        "prefix": "fas"
      },
      {
        "name": "DashCube",
        "id": "dashcube",
        "filter": [
          "dashcube"
        ],
        "prefix": "fab"
      },
      {
        "name": "Dungeons & Dragons",
        "id": "d-and-d",
        "filter": [
          "d-and-d"
        ],
        "prefix": "fab"
      },
      {
        "name": "Cuttlefish",
        "id": "cuttlefish",
        "filter": [
          "cuttlefish"
        ],
        "prefix": "fab"
      },
      {
        "name": "Cut",
        "id": "cut",
        "filter": [
          "scissors",
          "scissors",
          "files",
          "design",
          "interfaces",
          "editors",
          "business",
          "objects",
          "cut"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cubes",
        "id": "cubes",
        "filter": [
          "packages",
          "objects",
          "cubes"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cube",
        "id": "cube",
        "filter": [
          "package",
          "objects",
          "cube"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate CSS3 Logo",
        "id": "css3-alt",
        "filter": [
          "css3-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "CSS 3 Logo",
        "id": "css3",
        "filter": [
          "code",
          "css3"
        ],
        "prefix": "fab"
      },
      {
        "name": "Crown",
        "id": "crown",
        "filter": [
          "crown"
        ],
        "prefix": "fas"
      },
      {
        "name": "Crow",
        "id": "crow",
        "filter": [
          "bird",
          "bullfrog",
          "toad",
          "animals",
          "crow"
        ],
        "prefix": "fas"
      },
      {
        "name": "Crosshairs",
        "id": "crosshairs",
        "filter": [
          "gpd",
          "picker",
          "position",
          "design",
          "spinners",
          "maps",
          "crosshairs"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Crop",
        "id": "crop-alt",
        "filter": [
          "design",
          "crop-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "crop",
        "id": "crop",
        "filter": [
          "design",
          "crop"
        ],
        "prefix": "fas"
      },
      {
        "name": "Credit Card",
        "id": "credit-card",
        "filter": [
          "buy",
          "checkout",
          "credit-card-alt",
          "debit",
          "money",
          "payment",
          "purchase",
          "payments-shopping",
          "credit-card"
        ],
        "prefix": "fas"
      },
      {
        "name": "Creative Commons Share",
        "id": "creative-commons-share",
        "filter": [
          "creative-commons-share"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Sampling +",
        "id": "creative-commons-sampling-plus",
        "filter": [
          "creative-commons-sampling-plus"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Sampling",
        "id": "creative-commons-sampling",
        "filter": [
          "creative-commons-sampling"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Share Alike",
        "id": "creative-commons-sa",
        "filter": [
          "creative-commons-sa"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Remix",
        "id": "creative-commons-remix",
        "filter": [
          "creative-commons-remix"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Public Domain Alternate",
        "id": "creative-commons-pd-alt",
        "filter": [
          "creative-commons-pd-alt"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Public Domain",
        "id": "creative-commons-pd",
        "filter": [
          "creative-commons-pd"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons No Derivative Works",
        "id": "creative-commons-nd",
        "filter": [
          "creative-commons-nd"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Noncommercial (Yen Sign)",
        "id": "creative-commons-nc-jp",
        "filter": [
          "creative-commons-nc-jp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Noncommercial (Euro Sign)",
        "id": "creative-commons-nc-eu",
        "filter": [
          "creative-commons-nc-eu"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Noncommercial",
        "id": "creative-commons-nc",
        "filter": [
          "creative-commons-nc"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons Attribution",
        "id": "creative-commons-by",
        "filter": [
          "creative-commons-by"
        ],
        "prefix": "fab"
      },
      {
        "name": "Creative Commons",
        "id": "creative-commons",
        "filter": [
          "creative-commons"
        ],
        "prefix": "fab"
      },
      {
        "name": "cPanel",
        "id": "cpanel",
        "filter": [
          "cpanel"
        ],
        "prefix": "fab"
      },
      {
        "name": "Couch",
        "id": "couch",
        "filter": [
          "moving",
          "couch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Copyright",
        "id": "copyright",
        "filter": [
          "business",
          "copyright"
        ],
        "prefix": "fas"
      },
      {
        "name": "Copy",
        "id": "copy",
        "filter": [
          "clone",
          "duplicate",
          "file",
          "files-o",
          "files",
          "design",
          "interfaces",
          "editors",
          "business",
          "objects",
          "copy"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cookie Bite",
        "id": "cookie-bite",
        "filter": [
          "baked good",
          "bitten",
          "chips",
          "eating",
          "food",
          "snack",
          "sweet",
          "treat",
          "objects",
          "cookie-bite"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cookie",
        "id": "cookie",
        "filter": [
          "baked good",
          "chips",
          "food",
          "snack",
          "sweet",
          "treat",
          "objects",
          "cookie"
        ],
        "prefix": "fas"
      },
      {
        "name": "Contao",
        "id": "contao",
        "filter": [
          "contao"
        ],
        "prefix": "fab"
      },
      {
        "name": "Connect Develop",
        "id": "connectdevelop",
        "filter": [
          "connectdevelop"
        ],
        "prefix": "fab"
      },
      {
        "name": "Concierge Bell",
        "id": "concierge-bell",
        "filter": [
          "attention",
          "hotel",
          "service",
          "support",
          "travel",
          "concierge-bell"
        ],
        "prefix": "fas"
      },
      {
        "name": "Compress",
        "id": "compress",
        "filter": [
          "collapse",
          "combine",
          "contract",
          "merge",
          "smaller",
          "images",
          "audio-video",
          "compress"
        ],
        "prefix": "fas"
      },
      {
        "name": "Compass",
        "id": "compass",
        "filter": [
          "directory",
          "location",
          "menu",
          "safari",
          "spinners",
          "business",
          "objects",
          "compass"
        ],
        "prefix": "fas"
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
        ],
        "prefix": "fas"
      },
      {
        "name": "comments",
        "id": "comments",
        "filter": [
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
          "communication",
          "comments"
        ],
        "prefix": "fas"
      },
      {
        "name": "Comment Slash",
        "id": "comment-slash",
        "filter": [
          "chat",
          "comment-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Comment Dots",
        "id": "comment-dots",
        "filter": [
          "chat",
          "comment-dots"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Comment",
        "id": "comment-alt",
        "filter": [
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
          "communication",
          "comment-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "comment",
        "id": "comment",
        "filter": [
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
          "shapes",
          "communication",
          "comment"
        ],
        "prefix": "fas"
      },
      {
        "name": "Columns",
        "id": "columns",
        "filter": [
          "dashboard",
          "panes",
          "split",
          "editors",
          "business",
          "columns"
        ],
        "prefix": "fas"
      },
      {
        "name": "Coins",
        "id": "coins",
        "filter": [
          "coins"
        ],
        "prefix": "fas"
      },
      {
        "name": "cogs",
        "id": "cogs",
        "filter": [
          "gears",
          "settings",
          "interfaces",
          "objects",
          "cogs"
        ],
        "prefix": "fas"
      },
      {
        "name": "cog",
        "id": "cog",
        "filter": [
          "settings",
          "spinners",
          "interfaces",
          "objects",
          "cog"
        ],
        "prefix": "fas"
      },
      {
        "name": "Coffee",
        "id": "coffee",
        "filter": [
          "breakfast",
          "cafe",
          "drink",
          "morning",
          "mug",
          "tea",
          "interfaces",
          "business",
          "objects",
          "maps",
          "code",
          "coffee"
        ],
        "prefix": "fas"
      },
      {
        "name": "Codie Pie",
        "id": "codiepie",
        "filter": [
          "codiepie"
        ],
        "prefix": "fab"
      },
      {
        "name": "Codepen",
        "id": "codepen",
        "filter": [
          "codepen"
        ],
        "prefix": "fab"
      },
      {
        "name": "Code Branch",
        "id": "code-branch",
        "filter": [
          "branch",
          "code-fork",
          "fork",
          "git",
          "github",
          "rebase",
          "svn",
          "vcs",
          "version",
          "code",
          "code-branch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Code",
        "id": "code",
        "filter": [
          "brackets",
          "html",
          "code"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cocktail",
        "id": "cocktail",
        "filter": [
          "alcohol",
          "drink",
          "travel",
          "cocktail"
        ],
        "prefix": "fas"
      },
      {
        "name": "cloudversify",
        "id": "cloudversify",
        "filter": [
          "cloudversify"
        ],
        "prefix": "fab"
      },
      {
        "name": "Cloudsmith",
        "id": "cloudsmith",
        "filter": [
          "cloudsmith"
        ],
        "prefix": "fab"
      },
      {
        "name": "cloudscale.ch",
        "id": "cloudscale",
        "filter": [
          "cloudscale"
        ],
        "prefix": "fab"
      },
      {
        "name": "Alternate Cloud Upload",
        "id": "cloud-upload-alt",
        "filter": [
          "cloud-upload",
          "arrows",
          "interfaces",
          "cloud-upload-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Cloud Download",
        "id": "cloud-download-alt",
        "filter": [
          "cloud-download",
          "arrows",
          "interfaces",
          "cloud-download-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cloud",
        "id": "cloud",
        "filter": [
          "save",
          "shapes",
          "interfaces",
          "objects",
          "cloud"
        ],
        "prefix": "fas"
      },
      {
        "name": "Closed Captioning",
        "id": "closed-captioning",
        "filter": [
          "cc",
          "audio-video",
          "accessibility",
          "closed-captioning"
        ],
        "prefix": "fas"
      },
      {
        "name": "Clone",
        "id": "clone",
        "filter": [
          "copy",
          "duplicate",
          "files",
          "images",
          "design",
          "interfaces",
          "editors",
          "clone"
        ],
        "prefix": "fas"
      },
      {
        "name": "Clock",
        "id": "clock",
        "filter": [
          "date",
          "late",
          "schedule",
          "timer",
          "timestamp",
          "watch",
          "date-time",
          "clock"
        ],
        "prefix": "fas"
      },
      {
        "name": "Clipboard List",
        "id": "clipboard-list",
        "filter": [
          "checklist",
          "completed",
          "done",
          "finished",
          "intinerary",
          "ol",
          "schedule",
          "todo",
          "ul",
          "logistics",
          "clipboard-list"
        ],
        "prefix": "fas"
      },
      {
        "name": "Clipboard Check",
        "id": "clipboard-check",
        "filter": [
          "accept",
          "agree",
          "confirm",
          "done",
          "ok",
          "select",
          "success",
          "todo",
          "yes",
          "logistics",
          "clipboard-check"
        ],
        "prefix": "fas"
      },
      {
        "name": "Clipboard",
        "id": "clipboard",
        "filter": [
          "paste",
          "interfaces",
          "editors",
          "business",
          "objects",
          "clipboard"
        ],
        "prefix": "fas"
      },
      {
        "name": "Circle Notched",
        "id": "circle-notch",
        "filter": [
          "circle-o-notch",
          "spinners",
          "circle-notch"
        ],
        "prefix": "fas"
      },
      {
        "name": "Circle",
        "id": "circle",
        "filter": [
          "circle-thin",
          "dot",
          "notification",
          "audio-video",
          "shapes",
          "interfaces",
          "circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Church",
        "id": "church",
        "filter": [
          "building",
          "community",
          "religion",
          "buildings",
          "objects",
          "church"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chrome",
        "id": "chrome",
        "filter": [
          "browser",
          "chrome"
        ],
        "prefix": "fab"
      },
      {
        "name": "Child",
        "id": "child",
        "filter": [
          "users-people",
          "child"
        ],
        "prefix": "fas"
      },
      {
        "name": "chevron-up",
        "id": "chevron-up",
        "filter": [
          "arrows",
          "chevron-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "chevron-right",
        "id": "chevron-right",
        "filter": [
          "bracket",
          "forward",
          "next",
          "arrows",
          "chevron-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "chevron-left",
        "id": "chevron-left",
        "filter": [
          "back",
          "bracket",
          "previous",
          "arrows",
          "chevron-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "chevron-down",
        "id": "chevron-down",
        "filter": [
          "arrows",
          "chevron-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chevron Circle Up",
        "id": "chevron-circle-up",
        "filter": [
          "arrow",
          "arrows",
          "chevron-circle-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chevron Circle Right",
        "id": "chevron-circle-right",
        "filter": [
          "arrow",
          "forward",
          "next",
          "arrows",
          "chevron-circle-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chevron Circle Left",
        "id": "chevron-circle-left",
        "filter": [
          "arrow",
          "back",
          "previous",
          "arrows",
          "chevron-circle-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chevron Circle Down",
        "id": "chevron-circle-down",
        "filter": [
          "arrow",
          "dropdown",
          "menu",
          "more",
          "arrows",
          "chevron-circle-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Rook",
        "id": "chess-rook",
        "filter": [
          "chess",
          "chess-rook"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Queen",
        "id": "chess-queen",
        "filter": [
          "chess",
          "chess-queen"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Pawn",
        "id": "chess-pawn",
        "filter": [
          "chess",
          "chess-pawn"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Knight",
        "id": "chess-knight",
        "filter": [
          "chess",
          "chess-knight"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess King",
        "id": "chess-king",
        "filter": [
          "chess",
          "chess-king"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Board",
        "id": "chess-board",
        "filter": [
          "chess",
          "chess-board"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess Bishop",
        "id": "chess-bishop",
        "filter": [
          "chess",
          "chess-bishop"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chess",
        "id": "chess",
        "filter": [
          "chess"
        ],
        "prefix": "fas"
      },
      {
        "name": "Check Square",
        "id": "check-square",
        "filter": [
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
          "interfaces",
          "check-square"
        ],
        "prefix": "fas"
      },
      {
        "name": "Check Double",
        "id": "check-double",
        "filter": [
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
          "interfaces",
          "check-double"
        ],
        "prefix": "fas"
      },
      {
        "name": "Check Circle",
        "id": "check-circle",
        "filter": [
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
          "interfaces",
          "check-circle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Check",
        "id": "check",
        "filter": [
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
          "interfaces",
          "check"
        ],
        "prefix": "fas"
      },
      {
        "name": "Pie Chart",
        "id": "chart-pie",
        "filter": [
          "analytics",
          "graph",
          "pie-chart",
          "business",
          "chart-pie"
        ],
        "prefix": "fas"
      },
      {
        "name": "Line Chart",
        "id": "chart-line",
        "filter": [
          "activity",
          "analytics",
          "dashboard",
          "graph",
          "line-chart",
          "arrows",
          "business",
          "chart-line"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bar Chart",
        "id": "chart-bar",
        "filter": [
          "analytics",
          "bar-chart",
          "graph",
          "business",
          "chart-bar"
        ],
        "prefix": "fas"
      },
      {
        "name": "Area Chart",
        "id": "chart-area",
        "filter": [
          "analytics",
          "area-chart",
          "graph",
          "business",
          "chart-area"
        ],
        "prefix": "fas"
      },
      {
        "name": "Charging Station",
        "id": "charging-station",
        "filter": [
          "automotive",
          "charging-station"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chalkboard Teacher",
        "id": "chalkboard-teacher",
        "filter": [
          "blackboard",
          "instructor",
          "learning",
          "professor",
          "school",
          "whiteboard",
          "writing",
          "users-people",
          "education",
          "chalkboard-teacher"
        ],
        "prefix": "fas"
      },
      {
        "name": "Chalkboard",
        "id": "chalkboard",
        "filter": [
          "blackboard",
          "learning",
          "school",
          "teaching",
          "whiteboard",
          "writing",
          "images",
          "education",
          "communication",
          "chalkboard"
        ],
        "prefix": "fas"
      },
      {
        "name": "certificate",
        "id": "certificate",
        "filter": [
          "badge",
          "star",
          "spinners",
          "shapes",
          "interfaces",
          "payments-shopping",
          "business",
          "certificate"
        ],
        "prefix": "fas"
      },
      {
        "name": "Centercode",
        "id": "centercode",
        "filter": [
          "centercode"
        ],
        "prefix": "fab"
      },
      {
        "name": "Visa Credit Card",
        "id": "cc-visa",
        "filter": [
          "payments-shopping",
          "cc-visa"
        ],
        "prefix": "fab"
      },
      {
        "name": "Stripe Credit Card",
        "id": "cc-stripe",
        "filter": [
          "payments-shopping",
          "cc-stripe"
        ],
        "prefix": "fab"
      },
      {
        "name": "Paypal Credit Card",
        "id": "cc-paypal",
        "filter": [
          "payments-shopping",
          "cc-paypal"
        ],
        "prefix": "fab"
      },
      {
        "name": "MasterCard Credit Card",
        "id": "cc-mastercard",
        "filter": [
          "payments-shopping",
          "cc-mastercard"
        ],
        "prefix": "fab"
      },
      {
        "name": "JCB Credit Card",
        "id": "cc-jcb",
        "filter": [
          "payments-shopping",
          "cc-jcb"
        ],
        "prefix": "fab"
      },
      {
        "name": "Discover Credit Card",
        "id": "cc-discover",
        "filter": [
          "payments-shopping",
          "cc-discover"
        ],
        "prefix": "fab"
      },
      {
        "name": "Diner's Club Credit Card",
        "id": "cc-diners-club",
        "filter": [
          "payments-shopping",
          "cc-diners-club"
        ],
        "prefix": "fab"
      },
      {
        "name": "Apple Pay Credit Card",
        "id": "cc-apple-pay",
        "filter": [
          "payments-shopping",
          "cc-apple-pay"
        ],
        "prefix": "fab"
      },
      {
        "name": "American Express Credit Card",
        "id": "cc-amex",
        "filter": [
          "amex",
          "payments-shopping",
          "cc-amex"
        ],
        "prefix": "fab"
      },
      {
        "name": "Amazon Pay Credit Card",
        "id": "cc-amazon-pay",
        "filter": [
          "payments-shopping",
          "cc-amazon-pay"
        ],
        "prefix": "fab"
      },
      {
        "name": "Add to Shopping Cart",
        "id": "cart-plus",
        "filter": [
          "add",
          "shopping",
          "status",
          "payments-shopping",
          "cart-plus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Shopping Cart Arrow Down",
        "id": "cart-arrow-down",
        "filter": [
          "shopping",
          "status",
          "arrows",
          "payments-shopping",
          "cart-arrow-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Up",
        "id": "caret-up",
        "filter": [
          "arrow",
          "triangle up",
          "arrows",
          "caret-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Square Up",
        "id": "caret-square-up",
        "filter": [
          "caret-square-o-up",
          "arrows",
          "caret-square-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Square Right",
        "id": "caret-square-right",
        "filter": [
          "caret-square-o-right",
          "forward",
          "next",
          "arrows",
          "caret-square-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Square Left",
        "id": "caret-square-left",
        "filter": [
          "back",
          "caret-square-o-left",
          "previous",
          "arrows",
          "caret-square-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Square Down",
        "id": "caret-square-down",
        "filter": [
          "caret-square-o-down",
          "dropdown",
          "menu",
          "more",
          "arrows",
          "caret-square-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Right",
        "id": "caret-right",
        "filter": [
          "arrow",
          "forward",
          "next",
          "triangle right",
          "arrows",
          "caret-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Left",
        "id": "caret-left",
        "filter": [
          "arrow",
          "back",
          "previous",
          "triangle left",
          "arrows",
          "caret-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Caret Down",
        "id": "caret-down",
        "filter": [
          "arrow",
          "dropdown",
          "menu",
          "more",
          "triangle down",
          "arrows",
          "caret-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Car Side",
        "id": "car-side",
        "filter": [
          "vehicles",
          "automotive",
          "car-side"
        ],
        "prefix": "fas"
      },
      {
        "name": "Car Crash",
        "id": "car-crash",
        "filter": [
          "vehicles",
          "automotive",
          "car-crash"
        ],
        "prefix": "fas"
      },
      {
        "name": "Car Battery",
        "id": "car-battery",
        "filter": [
          "automotive",
          "car-battery"
        ],
        "prefix": "fas"
      },
      {
        "name": "Car Alt",
        "id": "car-alt",
        "filter": [
          "vehicles",
          "automotive",
          "car-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Car",
        "id": "car",
        "filter": [
          "machine",
          "transportation",
          "vehicle",
          "vehicles",
          "automotive",
          "objects",
          "maps",
          "car"
        ],
        "prefix": "fas"
      },
      {
        "name": "Capsules",
        "id": "capsules",
        "filter": [
          "drugs",
          "medicine",
          "medical",
          "capsules"
        ],
        "prefix": "fas"
      },
      {
        "name": "Cannabis",
        "id": "cannabis",
        "filter": [
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
          "medical",
          "cannabis"
        ],
        "prefix": "fas"
      },
      {
        "name": "Retro Camera",
        "id": "camera-retro",
        "filter": [
          "photo",
          "picture",
          "record",
          "images",
          "payments-shopping",
          "objects",
          "camera-retro"
        ],
        "prefix": "fas"
      },
      {
        "name": "camera",
        "id": "camera",
        "filter": [
          "photo",
          "picture",
          "record",
          "images",
          "payments-shopping",
          "objects",
          "camera"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calendar Times",
        "id": "calendar-times",
        "filter": [
          "status",
          "interfaces",
          "date-time",
          "calendar-times"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calendar Plus",
        "id": "calendar-plus",
        "filter": [
          "status",
          "interfaces",
          "date-time",
          "calendar-plus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calendar Minus",
        "id": "calendar-minus",
        "filter": [
          "status",
          "interfaces",
          "date-time",
          "calendar-minus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calendar Check",
        "id": "calendar-check",
        "filter": [
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
          "status",
          "interfaces",
          "date-time",
          "calendar-check"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Calendar",
        "id": "calendar-alt",
        "filter": [
          "calendar",
          "date",
          "event",
          "schedule",
          "time",
          "when",
          "status",
          "interfaces",
          "business",
          "date-time",
          "objects",
          "calendar-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calendar",
        "id": "calendar",
        "filter": [
          "calendar-o",
          "date",
          "event",
          "schedule",
          "time",
          "when",
          "status",
          "shapes",
          "interfaces",
          "business",
          "date-time",
          "objects",
          "calendar"
        ],
        "prefix": "fas"
      },
      {
        "name": "Calculator",
        "id": "calculator",
        "filter": [
          "interfaces",
          "business",
          "objects",
          "calculator"
        ],
        "prefix": "fas"
      },
      {
        "name": "BuySellAds",
        "id": "buysellads",
        "filter": [
          "buysellads"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bus Alt",
        "id": "bus-alt",
        "filter": [
          "machine",
          "public transportation",
          "transportation",
          "vehicle",
          "travel",
          "vehicles",
          "automotive",
          "bus-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bus",
        "id": "bus",
        "filter": [
          "machine",
          "public transportation",
          "transportation",
          "vehicle",
          "travel",
          "vehicles",
          "automotive",
          "objects",
          "bus"
        ],
        "prefix": "fas"
      },
      {
        "name": "Büromöbel-Experte GmbH & Co. KG.",
        "id": "buromobelexperte",
        "filter": [
          "buromobelexperte"
        ],
        "prefix": "fab"
      },
      {
        "name": "Burn",
        "id": "burn",
        "filter": [
          "energy",
          "medical",
          "burn"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bullseye",
        "id": "bullseye",
        "filter": [
          "target",
          "interfaces",
          "business",
          "objects",
          "bullseye"
        ],
        "prefix": "fas"
      },
      {
        "name": "bullhorn",
        "id": "bullhorn",
        "filter": [
          "announcement",
          "broadcast",
          "louder",
          "megaphone",
          "share",
          "interfaces",
          "communication",
          "payments-shopping",
          "business",
          "objects",
          "bullhorn"
        ],
        "prefix": "fas"
      },
      {
        "name": "Building",
        "id": "building",
        "filter": [
          "apartment",
          "business",
          "company",
          "office",
          "work",
          "buildings",
          "objects",
          "maps",
          "building"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bug",
        "id": "bug",
        "filter": [
          "insect",
          "report",
          "interfaces",
          "objects",
          "code",
          "bug"
        ],
        "prefix": "fas"
      },
      {
        "name": "BTC",
        "id": "btc",
        "filter": [
          "currency",
          "btc"
        ],
        "prefix": "fab"
      },
      {
        "name": "Brush",
        "id": "brush",
        "filter": [
          "bristles",
          "color",
          "handle",
          "painting",
          "design",
          "brush"
        ],
        "prefix": "fas"
      },
      {
        "name": "Broom",
        "id": "broom",
        "filter": [
          "broom"
        ],
        "prefix": "fas"
      },
      {
        "name": "Broadcast Tower",
        "id": "broadcast-tower",
        "filter": [
          "airwaves",
          "radio",
          "waves",
          "audio-video",
          "communication",
          "objects",
          "broadcast-tower"
        ],
        "prefix": "fas"
      },
      {
        "name": "Medical Briefcase",
        "id": "briefcase-medical",
        "filter": [
          "health briefcase",
          "medical",
          "briefcase-medical"
        ],
        "prefix": "fas"
      },
      {
        "name": "Briefcase",
        "id": "briefcase",
        "filter": [
          "bag",
          "business",
          "luggage",
          "office",
          "work",
          "objects",
          "maps",
          "briefcase"
        ],
        "prefix": "fas"
      },
      {
        "name": "Brain",
        "id": "brain",
        "filter": [
          "medical",
          "brain"
        ],
        "prefix": "fas"
      },
      {
        "name": "Braille",
        "id": "braille",
        "filter": [
          "accessibility",
          "braille"
        ],
        "prefix": "fas"
      },
      {
        "name": "Boxes",
        "id": "boxes",
        "filter": [
          "logistics",
          "boxes"
        ],
        "prefix": "fas"
      },
      {
        "name": "Box Open",
        "id": "box-open",
        "filter": [
          "moving",
          "box-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "Box",
        "id": "box",
        "filter": [
          "package",
          "logistics",
          "box"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bowling Ball",
        "id": "bowling-ball",
        "filter": [
          "sports",
          "bowling-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "bookmark",
        "id": "bookmark",
        "filter": [
          "save",
          "shapes",
          "writing",
          "payments-shopping",
          "objects",
          "maps",
          "bookmark"
        ],
        "prefix": "fas"
      },
      {
        "name": "Book Reader",
        "id": "book-reader",
        "filter": [
          "library",
          "education",
          "book-reader"
        ],
        "prefix": "fas"
      },
      {
        "name": "Book Open",
        "id": "book-open",
        "filter": [
          "flyer",
          "notebook",
          "open book",
          "pamphlet",
          "reading",
          "education",
          "book-open"
        ],
        "prefix": "fas"
      },
      {
        "name": "book",
        "id": "book",
        "filter": [
          "documentation",
          "read",
          "writing",
          "business",
          "objects",
          "maps",
          "book"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bong",
        "id": "bong",
        "filter": [
          "aparatus",
          "cannabis",
          "marijuana",
          "pipe",
          "smoke",
          "smoking",
          "medical",
          "bong"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bone",
        "id": "bone",
        "filter": [
          "medical",
          "bone"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bomb",
        "id": "bomb",
        "filter": [
          "objects",
          "maps",
          "bomb"
        ],
        "prefix": "fas"
      },
      {
        "name": "Lightning Bolt",
        "id": "bolt",
        "filter": [
          "electricity",
          "lightning",
          "weather",
          "zap",
          "images",
          "bolt"
        ],
        "prefix": "fas"
      },
      {
        "name": "bold",
        "id": "bold",
        "filter": [
          "editors",
          "bold"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bluetooth",
        "id": "bluetooth-b",
        "filter": [
          "communication",
          "bluetooth-b"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bluetooth",
        "id": "bluetooth",
        "filter": [
          "communication",
          "bluetooth"
        ],
        "prefix": "fab"
      },
      {
        "name": "Blogger B",
        "id": "blogger-b",
        "filter": [
          "blogger-b"
        ],
        "prefix": "fab"
      },
      {
        "name": "Blogger",
        "id": "blogger",
        "filter": [
          "blogger"
        ],
        "prefix": "fab"
      },
      {
        "name": "Blind",
        "id": "blind",
        "filter": [
          "users-people",
          "accessibility",
          "maps",
          "blind"
        ],
        "prefix": "fas"
      },
      {
        "name": "Blender",
        "id": "blender",
        "filter": [
          "objects",
          "blender"
        ],
        "prefix": "fas"
      },
      {
        "name": "BlackBerry",
        "id": "blackberry",
        "filter": [
          "blackberry"
        ],
        "prefix": "fab"
      },
      {
        "name": "Font Awesome Black Tie",
        "id": "black-tie",
        "filter": [
          "black-tie"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bity",
        "id": "bity",
        "filter": [
          "bity"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bitcoin",
        "id": "bitcoin",
        "filter": [
          "currency",
          "bitcoin"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bitbucket",
        "id": "bitbucket",
        "filter": [
          "bitbucket-square",
          "git",
          "bitbucket"
        ],
        "prefix": "fab"
      },
      {
        "name": "Birthday Cake",
        "id": "birthday-cake",
        "filter": [
          "business",
          "objects",
          "maps",
          "birthday-cake"
        ],
        "prefix": "fas"
      },
      {
        "name": "Binoculars",
        "id": "binoculars",
        "filter": [
          "objects",
          "maps",
          "binoculars"
        ],
        "prefix": "fas"
      },
      {
        "name": "BIMobject",
        "id": "bimobject",
        "filter": [
          "bimobject"
        ],
        "prefix": "fab"
      },
      {
        "name": "Bicycle",
        "id": "bicycle",
        "filter": [
          "bike",
          "gears",
          "transportation",
          "vehicle",
          "vehicles",
          "objects",
          "maps",
          "bicycle"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bezier Curve",
        "id": "bezier-curve",
        "filter": [
          "curves",
          "illustrator",
          "lines",
          "path",
          "vector",
          "design",
          "bezier-curve"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bell Slash",
        "id": "bell-slash",
        "filter": [
          "education",
          "status",
          "interfaces",
          "communication",
          "date-time",
          "maps",
          "bell-slash"
        ],
        "prefix": "fas"
      },
      {
        "name": "bell",
        "id": "bell",
        "filter": [
          "alert",
          "notification",
          "reminder",
          "education",
          "status",
          "interfaces",
          "communication",
          "payments-shopping",
          "date-time",
          "objects",
          "maps",
          "bell"
        ],
        "prefix": "fas"
      },
      {
        "name": "Behance Square",
        "id": "behance-square",
        "filter": [
          "behance-square"
        ],
        "prefix": "fab"
      },
      {
        "name": "Behance",
        "id": "behance",
        "filter": [
          "behance"
        ],
        "prefix": "fab"
      },
      {
        "name": "beer",
        "id": "beer",
        "filter": [
          "alcohol",
          "bar",
          "drink",
          "liquor",
          "mug",
          "stein",
          "interfaces",
          "objects",
          "maps",
          "beer"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bed",
        "id": "bed",
        "filter": [
          "lodging",
          "sleep",
          "travel",
          "users-people",
          "objects",
          "maps",
          "bed"
        ],
        "prefix": "fas"
      },
      {
        "name": "Battery 3/4 Full",
        "id": "battery-three-quarters",
        "filter": [
          "power",
          "status",
          "battery-three-quarters"
        ],
        "prefix": "fas"
      },
      {
        "name": "Battery 1/4 Full",
        "id": "battery-quarter",
        "filter": [
          "power",
          "status",
          "battery-quarter"
        ],
        "prefix": "fas"
      },
      {
        "name": "Battery 1/2 Full",
        "id": "battery-half",
        "filter": [
          "power",
          "status",
          "battery-half"
        ],
        "prefix": "fas"
      },
      {
        "name": "Battery Full",
        "id": "battery-full",
        "filter": [
          "power",
          "status",
          "battery-full"
        ],
        "prefix": "fas"
      },
      {
        "name": "Battery Empty",
        "id": "battery-empty",
        "filter": [
          "power",
          "status",
          "battery-empty"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bath",
        "id": "bath",
        "filter": [
          "objects",
          "maps",
          "code",
          "bath"
        ],
        "prefix": "fas"
      },
      {
        "name": "Basketball Ball",
        "id": "basketball-ball",
        "filter": [
          "sports",
          "basketball-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "Baseball Ball",
        "id": "baseball-ball",
        "filter": [
          "sports",
          "baseball-ball"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bars",
        "id": "bars",
        "filter": [
          "checklist",
          "drag",
          "hamburger",
          "list",
          "menu",
          "nav",
          "navigation",
          "ol",
          "reorder",
          "settings",
          "todo",
          "ul",
          "interfaces",
          "bars"
        ],
        "prefix": "fas"
      },
      {
        "name": "barcode",
        "id": "barcode",
        "filter": [
          "scan",
          "interfaces",
          "code",
          "barcode"
        ],
        "prefix": "fas"
      },
      {
        "name": "Bandcamp",
        "id": "bandcamp",
        "filter": [
          "bandcamp"
        ],
        "prefix": "fab"
      },
      {
        "name": "Band-Aid",
        "id": "band-aid",
        "filter": [
          "bandage",
          "boo boo",
          "ouch",
          "medical",
          "band-aid"
        ],
        "prefix": "fas"
      },
      {
        "name": "ban",
        "id": "ban",
        "filter": [
          "abort",
          "ban",
          "block",
          "cancel",
          "delete",
          "hide",
          "prohibit",
          "remove",
          "stop",
          "trash",
          "status",
          "interfaces"
        ],
        "prefix": "fas"
      },
      {
        "name": "Balance Scale",
        "id": "balance-scale",
        "filter": [
          "balanced",
          "justice",
          "legal",
          "measure",
          "weight",
          "business",
          "objects",
          "maps",
          "balance-scale"
        ],
        "prefix": "fas"
      },
      {
        "name": "backward",
        "id": "backward",
        "filter": [
          "previous",
          "rewind",
          "audio-video",
          "backward"
        ],
        "prefix": "fas"
      },
      {
        "name": "Backspace",
        "id": "backspace",
        "filter": [
          "command",
          "delete",
          "keyboard",
          "undo",
          "backspace"
        ],
        "prefix": "fas"
      },
      {
        "name": "Amazon Web Services (AWS)",
        "id": "aws",
        "filter": [
          "aws"
        ],
        "prefix": "fab"
      },
      {
        "name": "Award",
        "id": "award",
        "filter": [
          "honor",
          "praise",
          "prize",
          "recognition",
          "ribbon",
          "education",
          "interfaces",
          "objects",
          "award"
        ],
        "prefix": "fas"
      },
      {
        "name": "Aviato",
        "id": "aviato",
        "filter": [
          "aviato"
        ],
        "prefix": "fab"
      },
      {
        "name": "avianex",
        "id": "avianex",
        "filter": [
          "avianex"
        ],
        "prefix": "fab"
      },
      {
        "name": "Autoprefixer",
        "id": "autoprefixer",
        "filter": [
          "autoprefixer"
        ],
        "prefix": "fab"
      },
      {
        "name": "Audio Description",
        "id": "audio-description",
        "filter": [
          "audio-video",
          "accessibility",
          "audio-description"
        ],
        "prefix": "fas"
      },
      {
        "name": "Audible",
        "id": "audible",
        "filter": [
          "audible"
        ],
        "prefix": "fab"
      },
      {
        "name": "Atom",
        "id": "atom",
        "filter": [
          "education",
          "atom"
        ],
        "prefix": "fas"
      },
      {
        "name": "Atlas",
        "id": "atlas",
        "filter": [
          "book",
          "directions",
          "geography",
          "map",
          "wayfinding",
          "travel",
          "atlas"
        ],
        "prefix": "fas"
      },
      {
        "name": "At",
        "id": "at",
        "filter": [
          "e-mail",
          "email",
          "communication",
          "at"
        ],
        "prefix": "fas"
      },
      {
        "name": "Asymmetrik, Ltd.",
        "id": "asymmetrik",
        "filter": [
          "asymmetrik"
        ],
        "prefix": "fab"
      },
      {
        "name": "asterisk",
        "id": "asterisk",
        "filter": [
          "details",
          "spinners",
          "asterisk"
        ],
        "prefix": "fas"
      },
      {
        "name": "Assistive Listening Systems",
        "id": "assistive-listening-systems",
        "filter": [
          "communication",
          "accessibility",
          "assistive-listening-systems"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrows Vertical",
        "id": "arrows-alt-v",
        "filter": [
          "arrows-v",
          "resize",
          "arrows",
          "arrows-alt-v"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrows Horizontal",
        "id": "arrows-alt-h",
        "filter": [
          "arrows-h",
          "resize",
          "arrows",
          "arrows-alt-h"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrows",
        "id": "arrows-alt",
        "filter": [
          "arrow",
          "arrows",
          "bigger",
          "enlarge",
          "expand",
          "fullscreen",
          "move",
          "position",
          "reorder",
          "resize",
          "arrows-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "arrow-up",
        "id": "arrow-up",
        "filter": [
          "arrows",
          "arrow-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "arrow-right",
        "id": "arrow-right",
        "filter": [
          "forward",
          "next",
          "arrows",
          "arrow-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "arrow-left",
        "id": "arrow-left",
        "filter": [
          "back",
          "previous",
          "arrows",
          "arrow-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "arrow-down",
        "id": "arrow-down",
        "filter": [
          "download",
          "arrows",
          "arrow-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Arrow Circle Up",
        "id": "arrow-circle-up",
        "filter": [
          "arrows",
          "arrow-circle-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Arrow Circle Right",
        "id": "arrow-circle-right",
        "filter": [
          "forward",
          "next",
          "arrows",
          "arrow-circle-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Arrow Circle Left",
        "id": "arrow-circle-left",
        "filter": [
          "back",
          "previous",
          "arrows",
          "arrow-circle-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Arrow Circle Down",
        "id": "arrow-circle-down",
        "filter": [
          "download",
          "arrows",
          "arrow-circle-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrow Circle Up",
        "id": "arrow-alt-circle-up",
        "filter": [
          "arrow-circle-o-up",
          "arrows",
          "arrow-alt-circle-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrow Circle Right",
        "id": "arrow-alt-circle-right",
        "filter": [
          "arrow-circle-o-right",
          "forward",
          "next",
          "arrows",
          "arrow-alt-circle-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrow Circle Left",
        "id": "arrow-alt-circle-left",
        "filter": [
          "arrow-circle-o-left",
          "back",
          "previous",
          "arrows",
          "arrow-alt-circle-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Alternate Arrow Circle Down",
        "id": "arrow-alt-circle-down",
        "filter": [
          "arrow-circle-o-down",
          "download",
          "arrows",
          "arrow-alt-circle-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Archway",
        "id": "archway",
        "filter": [
          "arc",
          "monument",
          "road",
          "street",
          "travel",
          "archway"
        ],
        "prefix": "fas"
      },
      {
        "name": "Archive",
        "id": "archive",
        "filter": [
          "box",
          "package",
          "storage",
          "files",
          "writing",
          "moving",
          "business",
          "objects",
          "code",
          "archive"
        ],
        "prefix": "fas"
      },
      {
        "name": "Apple Pay",
        "id": "apple-pay",
        "filter": [
          "payments-shopping",
          "apple-pay"
        ],
        "prefix": "fab"
      },
      {
        "name": "Fruit Apple",
        "id": "apple-alt",
        "filter": [
          "education",
          "apple-alt"
        ],
        "prefix": "fas"
      },
      {
        "name": "Apple",
        "id": "apple",
        "filter": [
          "food",
          "fruit",
          "osx",
          "apple"
        ],
        "prefix": "fab"
      },
      {
        "name": "Apper Systems AB",
        "id": "apper",
        "filter": [
          "apper"
        ],
        "prefix": "fab"
      },
      {
        "name": "iOS App Store",
        "id": "app-store-ios",
        "filter": [
          "app-store-ios"
        ],
        "prefix": "fab"
      },
      {
        "name": "App Store",
        "id": "app-store",
        "filter": [
          "app-store"
        ],
        "prefix": "fab"
      },
      {
        "name": "Angular",
        "id": "angular",
        "filter": [
          "angular"
        ],
        "prefix": "fab"
      },
      {
        "name": "Angry Creative",
        "id": "angrycreative",
        "filter": [
          "angrycreative"
        ],
        "prefix": "fab"
      },
      {
        "name": "Angry Face",
        "id": "angry",
        "filter": [
          "disapprove",
          "emoticon",
          "face",
          "mad",
          "upset",
          "emoji",
          "angry"
        ],
        "prefix": "fas"
      },
      {
        "name": "angle-up",
        "id": "angle-up",
        "filter": [
          "arrow",
          "arrows",
          "angle-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "angle-right",
        "id": "angle-right",
        "filter": [
          "arrow",
          "forward",
          "next",
          "arrows",
          "angle-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "angle-left",
        "id": "angle-left",
        "filter": [
          "arrow",
          "back",
          "previous",
          "arrows",
          "angle-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "angle-down",
        "id": "angle-down",
        "filter": [
          "arrow",
          "arrows",
          "angle-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "Angle Double Up",
        "id": "angle-double-up",
        "filter": [
          "arrows",
          "angle-double-up"
        ],
        "prefix": "fas"
      },
      {
        "name": "Angle Double Right",
        "id": "angle-double-right",
        "filter": [
          "arrows",
          "forward",
          "next",
          "quote",
          "raquo",
          "angle-double-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "Angle Double Left",
        "id": "angle-double-left",
        "filter": [
          "arrows",
          "back",
          "laquo",
          "previous",
          "quote",
          "angle-double-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "Angle Double Down",
        "id": "angle-double-down",
        "filter": [
          "arrows",
          "angle-double-down"
        ],
        "prefix": "fas"
      },
      {
        "name": "AngelList",
        "id": "angellist",
        "filter": [
          "angellist"
        ],
        "prefix": "fab"
      },
      {
        "name": "Android",
        "id": "android",
        "filter": [
          "robot",
          "android"
        ],
        "prefix": "fab"
      },
      {
        "name": "Anchor",
        "id": "anchor",
        "filter": [
          "link",
          "objects",
          "maps",
          "anchor"
        ],
        "prefix": "fas"
      },
      {
        "name": "Amilia",
        "id": "amilia",
        "filter": [
          "amilia"
        ],
        "prefix": "fab"
      },
      {
        "name": "American Sign Language Interpreting",
        "id": "american-sign-language-interpreting",
        "filter": [
          "communication",
          "accessibility",
          "american-sign-language-interpreting"
        ],
        "prefix": "fas"
      },
      {
        "name": "ambulance",
        "id": "ambulance",
        "filter": [
          "help",
          "machine",
          "support",
          "vehicle",
          "medical",
          "vehicles",
          "automotive",
          "health",
          "objects",
          "maps",
          "ambulance"
        ],
        "prefix": "fas"
      },
      {
        "name": "Amazon Pay",
        "id": "amazon-pay",
        "filter": [
          "payments-shopping",
          "amazon-pay"
        ],
        "prefix": "fab"
      },
      {
        "name": "Amazon",
        "id": "amazon",
        "filter": [
          "amazon"
        ],
        "prefix": "fab"
      },
      {
        "name": "Allergies",
        "id": "allergies",
        "filter": [
          "freckles",
          "hand",
          "intolerances",
          "pox",
          "spots",
          "medical",
          "hands",
          "allergies"
        ],
        "prefix": "fas"
      },
      {
        "name": "align-right",
        "id": "align-right",
        "filter": [
          "text",
          "editors",
          "align-right"
        ],
        "prefix": "fas"
      },
      {
        "name": "align-left",
        "id": "align-left",
        "filter": [
          "text",
          "editors",
          "align-left"
        ],
        "prefix": "fas"
      },
      {
        "name": "align-justify",
        "id": "align-justify",
        "filter": [
          "text",
          "editors",
          "align-justify"
        ],
        "prefix": "fas"
      },
      {
        "name": "align-center",
        "id": "align-center",
        "filter": [
          "middle",
          "text",
          "editors",
          "align-center"
        ],
        "prefix": "fas"
      },
      {
        "name": "Algolia",
        "id": "algolia",
        "filter": [
          "algolia"
        ],
        "prefix": "fab"
      },
      {
        "name": "Air Freshener",
        "id": "air-freshener",
        "filter": [
          "automotive",
          "air-freshener"
        ],
        "prefix": "fas"
      },
      {
        "name": "affiliatetheme",
        "id": "affiliatetheme",
        "filter": [
          "affiliatetheme"
        ],
        "prefix": "fab"
      },
      {
        "name": "Adversal",
        "id": "adversal",
        "filter": [
          "adversal"
        ],
        "prefix": "fab"
      },
      {
        "name": "App.net",
        "id": "adn",
        "filter": [
          "adn"
        ],
        "prefix": "fab"
      },
      {
        "name": "adjust",
        "id": "adjust",
        "filter": [
          "contrast",
          "images",
          "design",
          "adjust"
        ],
        "prefix": "fas"
      },
      {
        "name": "Address Card",
        "id": "address-card",
        "filter": [
          "users-people",
          "communication",
          "business",
          "address-card"
        ],
        "prefix": "fas"
      },
      {
        "name": "Address Book",
        "id": "address-book",
        "filter": [
          "users-people",
          "communication",
          "business",
          "address-book"
        ],
        "prefix": "fas"
      },
      {
        "name": "Accusoft",
        "id": "accusoft",
        "filter": [
          "accusoft"
        ],
        "prefix": "fab"
      },
      {
        "name": "Accessible Icon",
        "id": "accessible-icon",
        "filter": [
          "accessibility",
          "handicap",
          "person",
          "wheelchair",
          "wheelchair-alt",
          "users-people",
          "vehicles",
          "health",
          "accessible-icon"
        ],
        "prefix": "fab"
      },
      {
        "name": "500px",
        "id": "500px",
        "filter": [
          "500px"
        ],
        "prefix": "fab"
      }
    ]
  }

  private getBsIcons(): Icon[] {
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
  }

}
