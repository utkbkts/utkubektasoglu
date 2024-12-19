import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    role: "user",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    role: "user",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    role: "user",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    role: "user",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    role: "user",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    role: "user",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    role: "user",
    paymentMethod: "Credit Card",
  },
];

export function TableUsers() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleEllipsisClick = (invoiceId: any) => {
    setOpenDropdown(openDropdown === invoiceId ? null : invoiceId);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAction = (action: string, invoiceId: any) => {
    setOpenDropdown(null);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Method</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.role}</TableCell>
            <TableCell className="relative text-right">
              <Ellipsis
                className="cursor-pointer absolute right-4 top-2"
                onClick={() => handleEllipsisClick(invoice.invoice)}
              />
              {openDropdown === invoice.invoice && (
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white border border-gray-200 rounded shadow">
                  <div
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAction("Ban", invoice.invoice)}
                  >
                    Ban User
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAction("Change Role", invoice.invoice)}
                  >
                    Change Role
                  </div>
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total User 5</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
