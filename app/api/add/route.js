import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("app")

    const doc = await collection.findOne({email: body.email})

    if (doc){
      return Response.json({ success: false, error: true, message: 'This Bittree already exists!', result: null })
    }

    const result = await collection.insertOne(body)
     
    return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result,  })
  }