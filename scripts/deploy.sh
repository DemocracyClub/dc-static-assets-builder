#!/bin/bash
set -euxo pipefail

S3_BUCKET=dc-shared-frontend-assets npm run build

aws s3 sync dist s3://dc-shared-frontend-assets --acl public-read
