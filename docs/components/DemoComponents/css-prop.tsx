/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
//@ts-nocheck
import { css } from "@emotion/react";
import { Slider, Box, Typography, Button } from "@mui/material";

const EmotionCSS = () => {
  return (
    <Box sx={{ width: 400 }}>
      <Typography>{"MUI default <Slider>"}</Typography>
      <Slider defaultValue={30} />
      <Typography>
        {"<Slider> css prop accessing theme.primary.main"}
      </Typography>
      <em>
        <Typography>
          {
            "theme.myColor is an arbitrary property assigned to the Emotion theme object, which started as the MUI object"
          }
        </Typography>
      </em>
      <Slider
        defaultValue={30}
        css={(theme) => {
          return { color: theme.primary.main };
        }}
      />
      <Typography>
        {"<Slider> css prop accessing theme.primary.main"}
      </Typography>
      <Slider
        defaultValue={30}
        css={(theme) => ({
          color: theme.primary.main,
        })}
      />
      <Typography>{"<Slider> with css prop"}</Typography>
      <Slider
        defaultValue={30}
        css={css`
          color: #20b2aa;

          :hover {
            color: #2e8b57;
          }
        `}
      />
    </Box>
  );
};

export default EmotionCSS;
