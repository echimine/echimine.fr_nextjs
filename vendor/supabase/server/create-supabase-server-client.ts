import { NextRequest } from 'next/server';
import { createServerClient, SetAllCookies } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServerClient(options?: {
  request?: NextRequest;
  onSetAllCookiesCallback?: SetAllCookies;
}) {
  const cookieStore = options?.request
    ? options.request.cookies
    : await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );

            if (options?.onSetAllCookiesCallback) {
              options.onSetAllCookiesCallback(cookiesToSet);
            }
          } catch {}
        },
      },
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );
}
