"use client"

import { Button } from "../ui/button"

const Cart = () => {
  return (
    <section className="py-16 px-60">
      <div>
        <div>
          <div className='grid grid-cols-[0.5fr,3fr,1fr,1fr,1fr,1fr] gap-1 text-lg font-bold'>
            <div>Sr. #</div>
            <div>Product Name</div>
            <div>Qty</div>
            <div>Rate</div>
            <div>Total</div>
            <div>Actions</div>
          </div>
          <div className='grid grid-cols-[0.5fr,3fr,1fr,1fr,1fr,1fr] gap-1'>
            <div>Sr. #</div>
            <div>Product Name</div>
            <div>Qty</div>
            <div>Rate</div>
            <div>Total</div>
            <div className='flex items-center justify-between align-middle'>
              <Button>Add</Button>
              <Button>Remove</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[4fr,1fr] gap-1'>
        <div>
          Shipping and Taxes
        </div>
        <div>
          0.00
        </div>
      </div>
      <div className='grid grid-cols-[4fr,1fr] gap-1'>
        <div>
          Grand Total
        </div>
        <div>
          0.00
        </div>
      </div>
      <div className='grid grid-cols-[1fr] gap-1'>
        <Button>Checkout</Button>
      </div>

    </section>
  )
}

export default Cart
