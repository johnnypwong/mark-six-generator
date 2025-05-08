import React from "react";
import { Box, Divider, IconButton, Slider, Stack, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { getRandomNumberList } from "../utils";

interface GeneratorTabProps {
  min: number;
  max: number;
  l: number;
}

export default function GeneratorTab({ min, max, l }: GeneratorTabProps) {
  const [length, setLength] = React.useState<number>(l);
  const [range, setRange] = React.useState<number[]>([min, max]);
  const [numberList, setNumberList] = React.useState<number[]>([]);

  const handleNumberChange = (_event: Event, newLength: number) => {
    setLength(newLength);
  }
  const handleRangeChange = (_event: Event, newRange: number[]) => {
    setRange(newRange);
  }

  const handleRefresh = (_event: React.SyntheticEvent) => {
    setNumberList(getRandomNumberList(range[0], range[1], length));
  }

  React.useEffect(() => {
    setNumberList(getRandomNumberList(range[0], range[1], length));
  }, [range, length])

  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={600} align="center">
        Random Number Generator
      </Typography>

      {/* Length */}
      <Box>
        <Typography variant="subtitle1" fontWeight={500} gutterBottom>
          Length
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body2">1</Typography>
          <Slider
            aria-label="Length"
            valueLabelDisplay="auto"
            value={length}
            min={1}
            max={10}
            onChange={handleNumberChange}
            sx={{ flex: 1 }}
          />
          <Typography variant="body2">10</Typography>
        </Stack>
      </Box>

      <Divider />

      {/* Range */}
      <Box>
        <Typography variant="subtitle1" fontWeight={500} gutterBottom>
          Range
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body2">0</Typography>
          <Slider
            aria-label="Range"
            value={range}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            onChange={handleRangeChange}
            sx={{ flex: 1 }}
          />
          <Typography variant="body2">100</Typography>
        </Stack>
      </Box>

      <Divider />

      {/* Result */}
      <Box>
        <Typography variant="subtitle1" fontWeight={500} gutterBottom>
          Result
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontWeight: 500,
            letterSpacing: 1,
            bgcolor: "#eeeeee",
            borderRadius: 2,
            py: 1,
            px: 2,
            mb: 1,
          }}
        >
          {numberList.join(", ")}
        </Typography>
        <Box textAlign="center">
          <IconButton
            aria-label="refresh"
            onClick={handleRefresh}
            sx={{
              bgcolor: "#1976d2",
              color: "white",
              "&:hover": {
                bgcolor: "#115293",
              },
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  )
}  