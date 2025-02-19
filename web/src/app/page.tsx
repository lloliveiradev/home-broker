import { getMyWallet } from "@/server/getWallet";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Image from "next/image";
//process.env.API_URL
export default async function MyWallet({ searchParams }: Promise<{ wallet_id: string }>) {
  const { wallet_id } = await searchParams;
  const wallet = await getMyWallet(process.env.API_URL, wallet_id);
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Ativo</TableCell>
              <TableCell>Cotação</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>
                <Button>Comprar/Vender</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
