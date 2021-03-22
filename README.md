# Step-7: Todo App (Part2 REST-API)


  refresh(event) {
    this.getItems(() => {
      event.target.complete();
    })
  }

  getItems(done?: () => void) {
    this.clearErrorMessage();

    this.itemService.getAll().subscribe(
      ({ results }) => {
        this.items = results;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch items';
      },
      done
    );
  }