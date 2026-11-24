import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
                route('visualizer/:id', './routes/visualizer.$id.tsx')
] satisfies RouteConfig;

//dynamic route for visualization of the image by creating a dynamic URL
//multiple images multiple routes using one dynamic function
