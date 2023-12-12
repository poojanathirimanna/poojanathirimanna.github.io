document.addEventListener('alpine:init', () => {
    Alpine.store('user', {
        profile: {
            title: '',
            name: '',
            age: '',
            email: '',
            contact_number: '',
            check_in: '',
            check_out: '',
            no_of_adults: '',
            no_of_childern: '',
           
        },

        reservation: {
            //  singleRoom: false,
            //  doubleRoom: false,
            //  tripleRoom: false,
            hotel_name: '',
            check_in: '',
            check_out: '',
            no_of_adults: '',
            no_of_childern: '',
            Kids_above_5_years_of_age: 0,
            extra_beds: '',
            number_of_singleRoom: 0,
            number_of_doubleRoom: 0,
            number_of_tripleRoom: 0,
            pool_view: false,
            garden_view: false,
            // adult_guide: 0,
            // kid_guide: 0,
            total_cost: 0,
            final_accommodation: 0,
            total_discount: 0,
            final_adventure_cost: 0,
            final_total: 0,
            promo_code: 0,
            discount_percentage: 0,


        },
        // payment:{
        //     card_number: null,
        //     card_holder: null,
        //     card_type: null,
        //     card_expiry:{
        //         month: null,
        //         year: null,

            
            

        









        updateUser() {
            localStorage.setItem(
                "userProfile",
                JSON.stringify(this.$store.user.profile)
            );
            localStorage.setItem(
                "userReservation",
                JSON.stringify(this.$store.user.reservation)
            );

        },


        init() {
            this.profile =
                JSON.parse(localStorage.getItem("userProfile")) || this.profile;
            this.reservation =
                JSON.parse(localStorage.getItem("userReservation")) || this.reservation;
        }

    })
})