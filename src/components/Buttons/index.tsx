import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";

export default function MuiButton() {
  const [formats, setFormats] = useState<string>();
  const handleFormatsChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string
  ) => {
    setFormats(updatedFormats);
  };
  console.log(formats,typeof(formats));
  return (
    <>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">text</Button>
          <Button variant="text" href="https://google.com">
            Go to google
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="primary">
            primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" color="error">
            error
          </Button>
          <Button variant="outlined" color="warning">
            warning
          </Button>
          <Button variant="outlined" color="info">
            info
          </Button>
          <Button variant="outlined" color="success">
            success
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="text" color="primary">
            primary
          </Button>
          <Button variant="text" color="secondary">
            secondary
          </Button>
          <Button variant="text" color="error">
            error
          </Button>
          <Button variant="text" color="warning">
            warning
          </Button>
          <Button variant="text" color="info">
            info
          </Button>
          <Button variant="text" color="success">
            success
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          {/* display block is important to replace default behaviour of stack */}
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            disableElevation
            disableRipple
            onClick={() => alert()}
          >
            Alert
          </Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="large"
            aria-label="button group "
          >
            <Button onClick={() => alert("left button clicked")}>left</Button>
            <Button>middle</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="toogle formats"
            value={formats}
            onChange={handleFormatsChange}
            size="small"
            color="success"
            orientation="vertical"
            exclusive
          >
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}
