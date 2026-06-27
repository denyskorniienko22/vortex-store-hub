import {
  PackageRemove01Icon,
  RssErrorIcon,
  SearchRemoveIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type MessageItemType = {
  icon: IconSvgElement;
  title: string;
  description: string;
  btnText?: string;
};

export const messages = {
  EMPTY: {
    CART: {
      icon: SearchRemoveIcon,
      title: "Your hangar is empty.",
      description:
        "Not a single powerful PC has yet taken its place in the assembly queue. Time to choose your favorite!",
      btnText: "Explore systems",
    },

    CATALOG: {
      icon: SearchRemoveIcon,
      title: "Configuration not found.",
      description:
        "Our engineers have not yet assembled such a powerful PC, but we have others!",
    },

    FAVORITES: {
      icon: SearchRemoveIcon,
      title: "Your selection has not yet been created.",
      description:
        "The best configurations you select will be stored here. Start scanning the catalog and mark your favorite systems with a heart!",
      btnText: "Find your dream computer",
    },

    USER_ORDERS: {
      icon: PackageRemove01Icon,
      title: "Your order history is as empty as outer space.",
      description:
        "It looks like you have'nt made a single shopping hyper-leap yet. Fill your terminal with new devices!",
      btnText: "Go to the goods hangar",
    },
  },

  ERROR: {
    CART: {
      icon: RssErrorIcon,
      title: "Cargo bay desynchronization.",
      description:
        "Telemetry failure while querying your procurement manifest. Terminal lost the secure handshake with the inventory grid.",
      btnText: "Return to catalog",
    },

    CATALOG: {
      icon: RssErrorIcon,
      title: "Radar scan failure.",
      description:
        "Unable to fetch gaming rigs from the grid. The database connection was interrupted or the server is updating configurations.",
    },

    FAVORITES: {
      icon: RssErrorIcon,
      title: "Telemetry uplink failure.",
      description:
        "Systems failed to sync your favorite configuration blueprints. Please check your network and re-initialize the link.",
      btnText: "Return to catalog",
    },

    PRODUCT: {
      icon: RssErrorIcon,
      title: "Data stream interrupted.",
      description:
        "This system's data stream was lost or the configuration no longer exists in the hub. Let's find you another beast.",
      btnText: "Scan the Catalog",
    },

    USER_ORDERS: {
      icon: RssErrorIcon,
      title: "Mainframe sync error.",
      description:
        "Failed to establish a secure handshake with the order registry database. Your procurement history is temporarily locked.",
      btnText: "Return to catalog",
    },

    CHECKOUT: {
      icon: RssErrorIcon,
      title: "Manifest loading failure.",
      description:
        "The terminal failed to stream your deployment specs. Secure database layers dropped the handshake while parsing your pending loadout.",
      btnText: "Return to cart",
    },
  },
};
