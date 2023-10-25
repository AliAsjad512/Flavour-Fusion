$(document).ready(function () {
    // Define the reviews array outside of the ready function to make it accessible.
    const reviews = [
      {
        name: 'John Doe',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Jane Smith',
        rating: 4,
        text: 'Nullam a velit sed turpis bibendum eleifend.',
      },
      {
        name: 'Bob Johnson',
        rating: 3,
        text: 'Phasellus eget libero odio.',
      },
    ];
  
    // Function to display reviews
    function displayReviews() {
      const container = document.getElementById('reviews-container');
      container.innerHTML = '';
  
      reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('new', 'review-card');
        reviewCard.innerHTML = `
          <h2>${review.name}</h2>
          <p class="rating">
            Rating:
            ${Array(review.rating)
              .fill(
                '<i class="fas fa-star" style="color: #ffbf00;"></i>',
              )
              .join('')}
          </p>
          <p>${review.text}</p>
          <button class="btn btn-warning edit-review" data-index="${index}">Edit</button>
          <button class="btn btn-danger delete-review" data-index="${index}">Delete</button>
        `;
        container.appendChild(reviewCard);
      });

      $('.edit-review').click(function () {
        const index = $(this).data('index');
          // Remove the review from the reviews array
  reviews.splice(index, 1);
  // Refresh the displayed reviews
  displayReviews();
      });
  
      $('.delete-review').click(function () {
        const index = $(this).data('index');
          // Remove the review from the reviews array
  reviews.splice(index, 1);
  // Refresh the displayed reviews
  displayReviews();
      });
    }
  
    displayReviews();
  
    // Handle the click event for the "Add Review" button
    $('#add-review').click(function () {
      const name = $('#user-name').val();
      const rating = $('#user-rating i.fas.fa-star').length; // Count the selected stars
      const text = $('#user-review').val();
  
      if (name && text) {
        reviews.push({ name, rating, text });
        displayReviews();
        $('#user-name').val('');
        $('#user-rating i').removeClass('fas').addClass('far');
        $('#user-review').val('');
      }
    });
  
    // Handle star rating selection
    $('#user-rating i').click(function () {
      const rating = $(this).data('rating');
      $('#user-rating i').removeClass('fas').addClass('far');
      $('#user-rating i:lt(' + rating + ')')
        .addClass('fas')
        .css('color', '#ffbf00');
    });
  });
  

