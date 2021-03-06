export default (d) => {
    return `<div class="modal fade" id="voteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${d.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img class="preview" src="${d.preview}" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-close" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary btn-save">Vote</button>
            </div>
          </div>
        </div>
      </div>`;
}
