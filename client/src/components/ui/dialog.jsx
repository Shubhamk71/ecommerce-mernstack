import React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"

export default function EditProductDialog() {
  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded">
        Edit Product
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes to the product information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* Form or content inside dialog */}
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter price"
            />
          </div>
        </form>

        <DialogFooter className="mt-4">
          <DialogClose className="px-4 py-2 bg-gray-300 rounded">Cancel</DialogClose>
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Save Changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
