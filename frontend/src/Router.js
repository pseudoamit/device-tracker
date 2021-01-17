import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import Checkout from "./components/Checkout";
import WeeklyRecord from "./components/WeeklyRecord";
import List from "./components/List";
import Header from "./components/Header";
import Feedback from "./components/Feedback";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/" component={List} />
      <Route exact path="/create" component={AddItem} />
      <Route exact path="/checkout/:id" component={Checkout} />
      <Route exact path="/weekly-record" component={WeeklyRecord} />
      <Route exact path="/feedback/:id" component={Feedback} />
    </BrowserRouter>
  );
};
