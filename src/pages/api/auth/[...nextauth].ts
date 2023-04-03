import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "537267212246-2obod19h4ofm37v0qd5r0m8dupt165v8.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
};
export default NextAuth(authOptions);
