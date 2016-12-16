function baseName(str) {
  let base = str.substring(str.lastIndexOf('/') + 1);
  if (base.lastIndexOf('.') !== -1) {
    base = base.substring(0, base.lastIndexOf('.'));
  }
  return base;
}

function packDirectory(requireContext) {
  const results = {};
  for (const filePath of requireContext.keys()) {
    const m = requireContext(filePath);
    filePath.replace(/\.[^/.]+$/, '');
    results[baseName(filePath)] = m;
  }
  return results;
}

module.exports = packDirectory;
