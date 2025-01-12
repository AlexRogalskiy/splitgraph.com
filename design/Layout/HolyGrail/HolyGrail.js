import { Box } from "@mui/material";

export const GridArea = {
  Header: "header",
  Nav: "nav",
  Content: "content",
  Side: "side",
  Footer: "footer",
};

const HolyGrail = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridGap: 4,
      gridTemplateAreas: `
        "${GridArea.Header} ${GridArea.Header}  ${GridArea.Header}"
        "${GridArea.Nav}    ${GridArea.Content} ${GridArea.Content}"
        "${GridArea.Footer} ${GridArea.Footer}  ${GridArea.Footer}"
    `,
      gridTemplateColumns: "300px 1fr",
      gridTemplateRows: "auto 100vh 1fr auto auto",
      gridGap: 0,
      maxHeight: "100vh",
      ".right-sidebar": {
        // display: ["none", "none", "initial"],
        "@media (min-width: 769px)": {
          position: "absolute",
          top: "75px",
          left: "calc((100vw - 600px - 100ch)/2 + 300px + 100ch + 2rem)",
          maxWidth: "300px",
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
        },
        "@media (max-width: 1570px)": {
          display: "none",
        },
      },
      ".content-wrapper": {
        backgroundColor: "#fff",
        minHeight: "calc(100vh - 3rem)",
        overflowY: "auto",
        gridArea: GridArea.Content,
      },
      ".main-content": {
        // backgroundColor: "#e0ffff",
        minHeight: "calc(100vh - 3rem)",
        img: {
          maxWidth: "100%",
        },
        "@media (min-width: 769px)": {
          MsOverflowStyle: "-ms-autohiding-scrollbar",
          paddingLeft: "calc((100vw - 600px - 100ch)/2)",
          paddingRight: "calc((100vw - 600px - 100ch)/2 + 300px)",
          scrollbarWidth: "thin",
        },
      },
      ".footer": {
        borderTop: "1px solid #efefef",
        paddingBottom: "8rem",
        // backgroundColor: "#efefef",
        width: "100%",
      },
      "@media (max-width: 768px)": {
        gridTemplateAreas: `
        "${GridArea.Header}"
        "${GridArea.Nav}"
        "${GridArea.Content}"
        "${GridArea.Side}"
        "${GridArea.Footer}"
      `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: `
        minmax(3rem, auto)
        minmax(4rem, auto)
        auto
        minmax(75px, auto)
        auto
      `,
      },
    }}
  >
    {children}
  </Box>
);

export default HolyGrail;
