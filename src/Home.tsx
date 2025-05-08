import { Box, Paper, Tab, Tabs } from "@mui/material";
import GeneratorTab from "./components/GeneratorTab";
import TabPanel from "./components/TabPanel";
import React from "react";

export default function Home() {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleTabChange = (_event: React.SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 400,
          borderRadius: 4,
          p: 3,
          bgcolor: "white",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          // centered
        >
          <Tab label="Lotto Max" />
          <Tab label="Mark Six" />
          <Tab label="Custome" />
        </Tabs>
        <TabPanel value={tabIndex} index={0} >
          <GeneratorTab min={1} max={50} l={7} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1} >
          <GeneratorTab min={1} max={49} l={6} />
        </TabPanel>
        <TabPanel value={tabIndex} index={2} >
          <GeneratorTab min={1} max={50} l={7} />
        </TabPanel>
      </Paper>
    </Box>
  )
}