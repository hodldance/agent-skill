function ok(data) {
  process.stdout.write(JSON.stringify({ success: true, data }, null, 2));
  process.exit(0);
}

function err(message, code = 'ERROR') {
  process.stdout.write(JSON.stringify({ success: false, error: { code, message } }, null, 2));
  process.exit(1);
}

module.exports = { ok, err };
