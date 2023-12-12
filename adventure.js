document.addEventListener('alpine:init', () => {
    Alpine.store('adventure', {
        bookings: {
            adventure_type: '',
            date: '',
            local_guests: '',
            local_kids: '',
            foreign_guests: '',
            foreign_kids: '',
            adult_guide: '',
            kid_guide: '',
            
           
        },

        updateAdventure() {
            localStorage.setItem(
                "adventureBookings",
                JSON.stringify(this.$store.adventure.bookings)
            );
            
        },


        init() {
            this.bookings =
                JSON.parse(localStorage.getItem("adventureBookings")) || this.bookings;
            
        }

    })
})