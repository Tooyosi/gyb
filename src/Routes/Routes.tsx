import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { landing, routeInterface } from "Routes";
import ScrollToTop from "components/ScrollToTop";
import LandingLayout from "layout/Landing/LandingLayout";

const childRoutes = (Layout: any, routes: Array<any>) =>
  routes.map(
    (
      { children, path, component: Component, name }: routeInterface,
      index: number
    ) =>
      children ? (
        // Route item with children
        children.map(
          (
            { path, component: Component, name }: routeInterface,
            index: number
          ) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <ScrollToTop>
                    <Component ComponentName={name} />
                  </ScrollToTop>
                </Layout>
              }
            />
          )
        )
      ) : (
        // Route item without children
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <ScrollToTop>
                <Component ComponentName={name} />
              </ScrollToTop>
            </Layout>
          }
        />
      )
  );

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {childRoutes(LandingLayout, landing)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
