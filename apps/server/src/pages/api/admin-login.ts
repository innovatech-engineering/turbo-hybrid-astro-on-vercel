import { APIRoute } from 'astro'

// API endpoint: GET /api/admin-login?username=x&password=y
// -> gets executed as a Vercel Function (locally: Node.js)
// see: https://docs.astro.build/de/core-concepts/endpoints/#server-endpoints-api-routes
export const get: APIRoute = async ({ params, request, url }) => {
  
  console.log('adming-login: env:', JSON.stringify(import.meta.env))
  
  if (
    url.searchParams.get('username') !== import.meta.env.ADMIN_USERNAME ||
    url.searchParams.get('password') !== import.meta.env.ADMIN_PASSWORD
  ) {
    return {
      status: 403,
      body: JSON.stringify({
        status: 'ERROR',
        message: 'This was wrong. Params: U: '+url.searchParams.get('username')+' P: '+ url.searchParams.get('password') + " expecting: " + import.meta.env.ADMIN_USERNAME + " / " + import.meta.env.ADMIN_PASSWORD,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  return {
    status: 200,
    body: JSON.stringify({
      status: 'SUCCESS',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

// we could implement any HTTP method as lower-case async function:
// post() => POST
// patch() => PATCH

// special case: delete is a reserved word, need to use del instead:
// del() => DELETE

// special case:
// all() => catch-all for any HTTP method
