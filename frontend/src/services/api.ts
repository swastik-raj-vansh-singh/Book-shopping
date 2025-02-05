export async function getAvailableSlots() {
    const res = await fetch('http://localhost:3000/slots/available');
    return res.json();
  }
  
  export async function createBooking(slotId: number, userName: string) {
    const res = await fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId, userName }),
    });
    return res.json();
  }
  
  export async function getBooking(id: number) {
    const res = await fetch(`http://localhost:3000/bookings/${id}`);
    return res.json();
  }
  
  export async function confirmBooking(id: number) {
    const res = await fetch(`http://localhost:3000/bookings/${id}/confirm`, {
      method: 'PATCH',
    });
    return res.json();
  }
  
  export async function cancelBooking(id: number) {
    const res = await fetch(`http://localhost:3000/bookings/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  }
  