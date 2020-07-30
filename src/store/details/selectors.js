export function selectArtworkDetails(state) {
  console.log("selector", state.details);
  return state.details;
}

export function selectHearts(state) {
  console.log("select hearts", state.details.hearts);
  return state.details.hearts;
}

export function selectBids(state) {
  return state.details.bids;
}
