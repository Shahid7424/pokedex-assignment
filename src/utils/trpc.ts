import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../src/app/server/root";

export const trpc = createTRPCReact<AppRouter>();