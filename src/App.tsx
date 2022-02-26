import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppShell, Navbar, Header, Autocomplete, Grid, Input, InputWrapper } from "@mantine/core";
import "./App.scss";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

function App() {

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          <Grid gutter={'sm'} columns={24} align={'center'}>
            <Grid.Col span={1}>
              <img src="/logo.png" className="w-8"></img>
            </Grid.Col>
            <Grid.Col span={4}>
              <span>xeosmoot.com</span>
            </Grid.Col>
            <Grid.Col span={8}>
              <InputWrapper
                id="global-search"
                size="md">
                <Input id="global-search" placeholder="Search" />
              </InputWrapper>
            </Grid.Col>
          </Grid>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={["React", "Angular", "Svelte", "Vue"]}
      />
    </AppShell>
  );
}

export default App;
