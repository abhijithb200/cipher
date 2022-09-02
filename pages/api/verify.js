// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ethers = require('ethers')
const fs = require('fs-extra')


export default async function handler(req, res) {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545")
  const wallet = new ethers.Wallet("0535613ecfa97ab5bbdde6e17f15bab7c709fed55bd010df72b9b0fc0366a833", provider)

  const abi = fs.readFileSync('D:/cipher/pages/api/Cert_sol_Certi.abi', 'utf-8')
  const contract = new ethers.Contract('0xe1A4AC1E361e93d0Cf4Bd1d2F67B6f8aAbEEEEc7', abi, wallet)


  let data = await contract.certificateDetails('12345')
  res.status(200).json({ data })
}
