import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.image,
            }),
          });

          if (res.ok) {
            const data = await res.json();
            user.accessToken = data.token;
            user.role = data.role || "user"; 
            return true;
          } else {
            console.error("Backend login failed with status:", res.status);
            return false; 
          }
        } catch (error) {
          console.error("Connection Error to Backend:", error.message);
          return false; 
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  
  pages: {
    signIn: "/",
    error: "/", 
  },
});

export { handler as GET, handler as POST };