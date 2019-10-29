const BaseStyle = {
  Container: {
    position: "relative",
    left: 0,
    right: 0
  },
  ListContainer: {
    display: "inline-flex"
  },
  List: {
    listStyleType: "none",
    padding: 0
  },
  Item: {
    // whiteSpace: "nowrap",
    // padding: 100,
    color: "blue"
  },
  Label: {}
};

const HorizontalStyle = {
  Container: {
    // marginTop: "-2rem",
    // overflowY: "scroll",
    backgroundColor: "gray",
    // WebkitOverflowScrolling: "touch",
    padding: 0
    // maxHeight: 75
  },
  ListContainer: {
    flexWrap: "wrap",
    marginTop: "3rem",
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",

    flexFlow: "initial",
    flexBasis: "100%",
    padding: 0,

    // backgroundColor: "green",
    // paddingBottom: "1rem",
    // overflowY: "hidden",
    // height: "4rem",
    // backgroundColor: "green",
    borderTopWidth: "1px",
    borderTopStyle: "dotted",
    borderTopColor: "secondary",
    height: "3rem",
    backgroundColor: "gray"
  },
  List: {
    display: "inline-flex",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollbarWidth: "0",
    MsOverflowStyle: "none",
    overflowY: "hidden",
    alignItems: "center"
    // lineHeight:
    // paddingBottom: "2rem"
  },
  Item: {
    display: "flex",
    whiteSpace: "nowrap"
  },
  Label: {
    whiteSpace: "nowrap",
    zIndex: 10
  }
};

const VerticalStyle = {
  Container: {},
  ListContainer: {},
  List: {},
  Item: {
    display: "flex",
    flexDirection: "column"
  },
  Label: {
    display: "block",
    flexBasis: "100%"
  }
};

const breakStyle = (
  key,
  styles = { BaseStyle, VerticalStyle, HorizontalStyle }
) => ({
  ...styles.BaseStyle[key],
  "@media (min-width: 769px)": {
    ...styles.VerticalStyle[key]
  },
  "@media (max-width: 768px)": {
    ...styles.HorizontalStyle[key]
  }
});

const Style = {
  Container: breakStyle("Container"),
  List: breakStyle("List"),
  ListContainer: breakStyle("ListContainer"),
  Item: breakStyle("Item"),
  Label: breakStyle("Label")
};

// TODO: Temporary hack
// This is a hack because we don't yet store parentId on nodes, in which
// case we could just check in the label itself ifs parent was the last clicked
const unmuteChildren = {
  ".sgr-sidebar-label--muted": {
    opacity: 1.0
  }
};

const muteChildren = {
  ".sgr-sidebar-label--muted": {
    opacity: 0.5
  }
};

export const getListContainerStyle = ({
  isLastClicked = false,
  hiddenHorizontally = false,
  hiddenVertically = false,
  depth = 0
}) => {
  return breakStyle("ListContainer", {
    BaseStyle,
    HorizontalStyle: {
      ...HorizontalStyle,
      ListContainer: {
        ...HorizontalStyle.ListContainer,
        ...(isLastClicked ? unmuteChildren : muteChildren),
        ...(hiddenHorizontally
          ? { display: "none !important" }
          : { display: HorizontalStyle.ListContainer.display }),
        ...(depth < 1
          ? { marginTop: "0 !important" }
          : { marginTop: HorizontalStyle.ListContainer.marginTop })
      }
    },
    VerticalStyle: {
      ...VerticalStyle,
      ListContainer: {
        ...VerticalStyle.ListContainer,
        ...(hiddenVertically
          ? { display: "none !important" }
          : { display: VerticalStyle.ListContainer.display })
      }
    }
  });
};

export default Style;
