function validateRole(req, res, next) {
  if (req.role != "admin") {
    return res.status(403).json({ error: "This route doesn't exist!" });
  }
}
export default validateRole;
